import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { CrudService } from '../../api';
import {
  createInitItem,
  createInitItemsWithPagination,
  nullableResult,
  TListRequest,
  TListResponce,
  TRequestProcess,
  TypeOrmDeleteResult,
} from '../../api/types';
import { notification } from 'antd';

export class CrudStore<Entity> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }
  public createCrudStore() {
    const Gate = createGate();

    const service = new CrudService<Entity>(this.url);

    const createFx = createEffect<Partial<Entity>, Entity, Error>({
      handler: (mt) => service.create(mt),
    });

    const getAllFx = createEffect<TListRequest<Entity>, TListResponce<Entity>, Error>({
      handler: (req) => service.getAll(req),
    });

    const getOneFx = createEffect<number, Entity, Error>({
      handler: (id) => service.getOne(id),
    });

    const updateFx = createEffect<Entity, Entity, Error>({
      handler: (mt) => service.updateOne(mt),
    });

    const deleteFx = createEffect<number, TypeOrmDeleteResult, Error>({
      handler: (id) => service.deleteOne(id),
    });

    const getAllDefault = createEvent();
    const resetOne = createEvent();
    const resetList = createEvent();
    const setPage = createEvent<number>();
    const setPageSize = createEvent<number>();
    const setFilter = createEvent<any>();
    const setItem = createEvent<Entity>();

    const $oneStore = createStore<TRequestProcess<Entity>>(createInitItem());
    const $onepending = createStore<boolean>(false);
    const $listStore = createStore<TListResponce<Entity>>(createInitItemsWithPagination<Entity>());

    $listStore
      .on(getAllFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(getAllFx.done, (prev, { result }) => ({
        ...prev,
        items: result.items,
        totalRecords: result.totalRecords,
      }))
      .on(setPage, (prev, page) => ({ ...prev, page }))
      .on(setPageSize, (prev, limit) => ({ ...prev, limit }))
      .on(setFilter, (prev, filter) => ({ ...prev, filter }))
      .on(getAllFx.fail, () => notification.error({ message: 'Ошибка получения списка меню' }))
      .reset(resetList);

    $oneStore
      .on(setItem, (prev, item) => ({ ...prev, item }))
      .on(createFx.done, nullableResult)
      .on(getOneFx.done, nullableResult)
      .on(updateFx.done, nullableResult)
      .on(deleteFx.done, (prev, { result }: { result: TypeOrmDeleteResult }) =>
        result.affected ? createInitItem<Entity>() : prev
      )
      .on(createFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(getOneFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(updateFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(deleteFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(createFx.fail, () => notification.error({ message: 'Ошибка создания меню' }))
      .on(getOneFx.fail, () => notification.error({ message: 'Ошибка получения меню' }))
      .on(updateFx.fail, () => notification.error({ message: 'Ошибка обновления меню' }))
      .on(deleteFx.fail, () => notification.error({ message: 'Ошибка удаления меню' }))
      .reset(resetOne);

    sample({
      clock: [Gate.state, getAllDefault],
      source: $listStore,
      fn: ({ limit, page, filter, pending }: TListResponce<Entity>) =>
        filter ? { limit, page, filter, pending } : { limit, page, pending },
      target: getAllFx,
    });

    return {
      createFx,
      resetList,
      resetOne,
      setFilter,
      setPage,
      setPageSize,
      $listStore,
      $oneStore,
      $onepending,
      getAllFx,
      updateFx,
      getOneFx,
      deleteFx,
      Gate,
      setItem,
      getAllDefault,
    };
  }
}

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

export class CrudStore<D> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }
  public createCrudStore() {
    const Gate = createGate();

    const service = new CrudService<D>(this.url);

    const createFx = createEffect<D, D, Error>({
      handler: (mt) => service.create(mt),
    });

    const getAllFx = createEffect<TListRequest<D>, TListResponce<D>, Error>({
      handler: (req) => service.getAll(req),
    });

    const getOneFx = createEffect<number, D, Error>({
      handler: (id) => service.getOne(id),
    });

    const updateFx = createEffect<D, D, Error>({
      handler: (mt) => service.updateOne(mt),
    });

    const deleteFx = createEffect<number, TypeOrmDeleteResult, Error>({
      handler: (id) => service.deleteOne(id),
    });

    const resetOne = createEvent();
    const resetList = createEvent();
    const setPage = createEvent<number>();
    const setPageSize = createEvent<number>();
    const setFilter = createEvent<any>();
    const setItem = createEvent<D>();

    const $oneStore = createStore<TRequestProcess<D>>(createInitItem());
    const $onepending = createStore<boolean>(false);
    const $listStore = createStore<TListResponce<D>>(createInitItemsWithPagination<D>());

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
        result.affected ? createInitItem<D>() : prev
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
      clock: [Gate.state],
      source: $listStore,
      fn: ({ limit, page, filter, pending }: TListResponce<D>) =>
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
    };
  }
}

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
import { TId, TWithId } from '../../types';
import { NullableNumber } from '../../../core/types';

export class CrudStore<CreateEntity, ReturnEntity extends { id: TId } = CreateEntity & TWithId> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }
  public createCrudStore() {
    const ListGate = createGate();
    const OneGate = createGate<NullableNumber>();
    const service = new CrudService<CreateEntity, ReturnEntity>(this.url);

    const createFx = createEffect<Partial<CreateEntity>, ReturnEntity, Error>({
      handler: (mt) => service.create(mt),
    });

    const getAllFx = createEffect<TListRequest<ReturnEntity>, TListResponce<ReturnEntity>, Error>({
      handler: (req) => service.getAll(req),
    });

    const getOneFx = createEffect<number, ReturnEntity, Error>({
      handler: (id) => service.getOne(id),
    });

    const updateFx = createEffect<ReturnEntity, ReturnEntity, Error>({
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
    const setItem = createEvent<ReturnEntity>();

    const $oneStore = createStore<TRequestProcess<ReturnEntity>>(createInitItem());
    const $itemPending = createStore<boolean>(false);
    const $listStore = createStore<TListResponce<ReturnEntity>>(
      createInitItemsWithPagination<ReturnEntity>()
    );

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
        result.affected ? createInitItem<ReturnEntity>() : prev
      )
      .on(createFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(getOneFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(updateFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(deleteFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(createFx.fail, () => notification.error({ message: 'Ошибка создания' }))
      .on(getOneFx.fail, () => notification.error({ message: 'Ошибка запроса' }))
      .on(updateFx.fail, () => notification.error({ message: 'Ошибка обновления' }))
      .on(deleteFx.fail, () => notification.error({ message: 'Ошибка удаления' }))
      .reset(resetOne);

    sample({
      clock: [ListGate.state, getAllDefault],
      source: $listStore,
      fn: ({ limit, page, filter, pending }: TListResponce<ReturnEntity>) =>
        filter ? { limit, page, filter, pending } : { limit, page, pending },
      target: getAllFx,
    });

    sample({
      clock: OneGate.open,
      source: OneGate.state,
      fn: () => (!isNaN(Number(OneGate.state)) ? Number(OneGate.state) : 9),
      target: getOneFx,
    });

    // guard({
    //   clock: OneGate.state,
    //   filter: OneGate.state.map((v) => !!v && v > 0),
    //   source: $rt,

    //   target: getOneFx,
    // });

    return {
      createFx,
      resetList,
      resetOne,
      setFilter,
      setPage,
      setPageSize,
      $listStore,
      $oneStore,
      $itemPending,
      getAllFx,
      updateFx,
      getOneFx,
      deleteFx,
      ListGate,
      OneGate,
      setItem,
      getAllDefault,
    };
  }
}

import {
  createEffect,
  createEvent,
  createStore,
  Effect,
  Event,
  guard,
  sample,
  Store,
} from 'effector';
import { createGate, Gate } from 'effector-react';
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
import { TItemWithId } from '../../types';
import { NullableNumber } from '../../../core/types';
import { isNumber } from '../../utils/utils';

export type TCrudStore<CreateEntity, FullEntity = TItemWithId<CreateEntity>> = {
  createFx: Effect<Partial<CreateEntity>, FullEntity, Error>;
  resetList: Event<void>;
  resetOne: Event<void>;
  setFilter: Event<any>;
  setPage: Event<number>;
  setPageSize: Event<number>;
  $listStore: Store<any>;
  $oneStore: Store<any>;
  $itemPending: Store<boolean>;
  getAllFx: Effect<TListRequest<FullEntity>, TListResponce<FullEntity>>;
  updateFx: Effect<FullEntity, FullEntity, Error>;
  getOneFx: Effect<number, FullEntity, Error>;
  deleteFx: Effect<number, TypeOrmDeleteResult, Error>;
  ListGate: Gate<TListRequest<FullEntity>>;
  OneGate: Gate<NullableNumber>;
  setItem: Event<FullEntity>;
  getAllDefault: Event<void>;
  loadItem: Event<number>;
};

export class CrudStore<CreateEntity, FullEntity = TItemWithId<CreateEntity>> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public createCrudStore(): TCrudStore<CreateEntity, FullEntity> {
    const ListGate = createGate<TListRequest<FullEntity>>();
    const OneGate = createGate<NullableNumber>();
    const service = new CrudService<CreateEntity, FullEntity>(this.url);

    const createFx = createEffect<Partial<CreateEntity>, FullEntity, Error>({
      handler: (mt) => service.create(mt),
    });

    const getAllFx = createEffect<TListRequest<FullEntity>, TListResponce<FullEntity>, Error>({
      handler: (req) => service.getAll(req),
    });

    const getOneFx = createEffect<number, FullEntity, Error>({
      handler: (id) => service.getOne(id),
    });

    const updateFx = createEffect<FullEntity, FullEntity, Error>({
      handler: (mt) => service.updateOne(mt),
    });

    const deleteFx = createEffect<number, TypeOrmDeleteResult, Error>({
      handler: (id) => service.deleteOne(id),
    });

    const loadItem = createEvent<number>();
    const getAllDefault = createEvent();
    const resetOne = createEvent();
    const resetList = createEvent();
    const setPage = createEvent<number>();
    const setPageSize = createEvent<number>();
    const setFilter = createEvent<any>();
    const setItem = createEvent<FullEntity>();

    const $oneStore = createStore<TRequestProcess<FullEntity>>(createInitItem());
    const $itemPending = createStore<boolean>(false);
    const $listStore = createStore<TListResponce<FullEntity>>(
      createInitItemsWithPagination<FullEntity>()
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
        result.affected ? createInitItem<FullEntity>() : prev
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
      fn: ({ limit, page, filter, pending }: TListResponce<FullEntity>) =>
        filter ? { limit, page, filter, pending } : { limit, page, pending },
      target: getAllFx,
    });

    guard({
      clock: OneGate.state,
      source: OneGate.state.map((state) => (state ? state : UN_EXISTING_ID)),
      filter: OneGate.state.map((state) => isNumber(state) || state === UN_EXISTING_ID),
      target: getOneFx,
    });

    sample({
      clock: loadItem,
      target: getOneFx,
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
      $itemPending,
      getAllFx,
      updateFx,
      getOneFx,
      deleteFx,
      ListGate,
      OneGate,
      setItem,
      getAllDefault,
      loadItem,
    };
  }
}

const UN_EXISTING_ID = -100000;

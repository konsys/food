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
import { NullableNumber } from '../../../core/types';
import { isNumber } from '../../utils/utils';
import { TItemWithId } from '../../types';

export type TCreateItemFx<CreateEntity, FullEntity> = Effect<
  Partial<CreateEntity>,
  FullEntity,
  Error
>;
export type TUpdateItemFx<FullEntity> = Effect<FullEntity, FullEntity>;
export type TDeleteItemFx = Effect<number, TypeOrmDeleteResult>;
export type TGetAllFx<FullEntity> = Effect<
  TListRequest<FullEntity>,
  TListResponce<FullEntity>,
  Error
>;

export type TCrudStore<CreateEntity, FullEntity = TItemWithId<CreateEntity>> = {
  resetList: Event<void>;
  resetOne: Event<void>;
  setFilter: Event<any>;
  setPage: Event<number>;
  setPageSize: Event<number>;
  $listStore: Store<any>;
  $oneStore: Store<any>;
  $itemPending: Store<boolean>;
  ListGate: Gate<TListRequest<FullEntity>>;
  OneGate: Gate<NullableNumber>;
  setItem: Event<FullEntity>;
  getAllDefault: Event<void>;
  getItem: Event<number>;
  createItemFx: TCreateItemFx<Partial<CreateEntity>, FullEntity>;
  updateItemFx: TUpdateItemFx<FullEntity>;
  deleteItemFx: TDeleteItemFx;
  getAll: Event<TListRequest<FullEntity>>;
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

    const createItemFx = createEffect<Partial<CreateEntity>, FullEntity, Error>({
      handler: (mt) => service.create(mt),
    });

    const getAllFx = createEffect<TListRequest<FullEntity>, TListResponce<FullEntity>, Error>({
      handler: (req) => service.getAll(req),
    });

    const getItemFx = createEffect<number, FullEntity, Error>({
      handler: (id) => service.getOne(id),
    });

    const updateItemFx = createEffect<FullEntity, FullEntity, Error>({
      handler: (mt) => service.updateOne(mt),
    });

    const deleteItemFx = createEffect<number, TypeOrmDeleteResult, Error>({
      handler: (id) => service.deleteOne(id),
    });

    const getItem = createEvent<number>();
    const getAllDefault = createEvent();
    const getAll = createEvent<TListRequest<FullEntity>>();
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
      .on(createItemFx.done, nullableResult)
      .on(getItemFx.done, nullableResult)
      .on(updateItemFx.done, nullableResult)
      .on(deleteItemFx.done, (prev, { result }: { result: TypeOrmDeleteResult }) =>
        result.affected ? createInitItem<FullEntity>() : prev
      )
      .on(createItemFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(getItemFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(updateItemFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(deleteItemFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(createItemFx.fail, () => notification.error({ message: 'Ошибка создания' }))
      .on(getItemFx.fail, () => notification.error({ message: 'Ошибка запроса' }))
      .on(updateItemFx.fail, () => notification.error({ message: 'Ошибка обновления' }))
      .on(deleteItemFx.fail, () => notification.error({ message: `Ошибка удаления` }))
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
      target: getItemFx,
    });

    sample({
      clock: getAll,
      target: getAllFx,
    });

    sample({
      clock: [deleteItemFx.done, updateItemFx.done, createItemFx.done],
      target: getAllDefault,
    });

    sample({
      clock: getItem,
      target: getItemFx,
    });

    return {
      resetList,
      resetOne,
      setFilter,
      setPage,
      setPageSize,
      $listStore,
      $oneStore,
      $itemPending,
      ListGate,
      OneGate,
      setItem,
      getAllDefault,
      getItem,
      createItemFx,
      deleteItemFx,
      updateItemFx,
      getAll,
    };
  }
}

const UN_EXISTING_ID = -100000;

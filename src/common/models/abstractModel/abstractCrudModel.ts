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
import isEmpty from 'lodash/isEmpty';
import { createGate, Gate } from 'effector-react';
import { CrudService } from '../../api';
import {
  createInitItem,
  createInitItemsWithPagination,
  TListRequest,
  TListResponce,
  TItemStore,
  TypeOrmDeleteResult,
} from '../../api/types';
import { TUuid, TItemWithUuid } from '../../types/index';
import { clearItemErrorHandler, nullableResult, requestItemErrorHandler, requestListErrorHandler } from './utils';



export type TGetOneByFilterFx<FullEntity> = Effect<
  Partial<FullEntity>,
  FullEntity,
  Error
>;

export type TCreateItemFx<CreateEntity, FullEntity = CreateEntity> = Effect<
  Partial<CreateEntity>,
  FullEntity,
  Error
>;
export type TUpdateItemFx<FullEntity> = Effect<FullEntity, FullEntity>;
export type TDeleteItemFx = Effect<TUuid, TypeOrmDeleteResult>;
export type TGetAllFx<FullEntity> = Effect<
  TListRequest<FullEntity>,
  TListResponce<FullEntity>,
  Error
>;

export type TCrudStore<CreateEntity extends { uuid: TUuid }, FullEntity = CreateEntity> = {
  resetList: Event<void>;
  resetOne: Event<void>;
  setFilter: Event<any>;
  setPage: Event<number>;
  setPageSize: Event<number>;
  resetItemError: Event<void>;
  $listStore: Store<TListResponce<FullEntity>>;
  $itemStore: Store<TItemStore<FullEntity>>;
  ListGate: Gate<TListRequest<FullEntity>>;
  ItemGate: Gate<TUuid>;
  setItem: Event<FullEntity>;
  getAllDefault: Event<void>;
  getItem: Event<TUuid>;
  getItemByFilterFx: TGetOneByFilterFx<FullEntity>;
  createItemFx: TCreateItemFx<Partial<CreateEntity>, FullEntity>;
  createItemWithoutFetchingListFx: TCreateItemFx<Partial<CreateEntity>, FullEntity>;
  updateItemFx: TUpdateItemFx<FullEntity>;
  deleteItemFx: TDeleteItemFx;
  getAll: Event<TListRequest<FullEntity>>;
  getAllFx: Effect<TListRequest<FullEntity>, TListResponce<FullEntity>, Error>
};

export class CrudStore<
  CreateEntity extends { uuid: TUuid },
  FullEntity = TItemWithUuid<CreateEntity>
  > {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public createCrudStore(): TCrudStore<CreateEntity, FullEntity> {
    const ListGate = createGate<TListRequest<FullEntity>>();
    const ItemGate = createGate<TUuid>();
    const service = new CrudService<CreateEntity, FullEntity>(this.url);

    const createItemWithoutFetchingListFx = createEffect<Partial<CreateEntity>, FullEntity, Error>({
      handler: (mt) => service.create(mt),
    });

    const createItemFx = createEffect<Partial<CreateEntity>, FullEntity, Error>({
      handler: (mt) => service.create(mt),
    });

    const getAllFx = createEffect<TListRequest<FullEntity>, TListResponce<FullEntity>, Error>({
      handler: (req) => service.getAll(req),
    });

    const getItemFx = createEffect<TUuid, FullEntity, Error>({
      handler: (uuid) => service.getOne(uuid),
    });

    const getItemByFilterFx = createEffect<Partial<FullEntity>, FullEntity, Error>({
      handler: (filter) => service.getOneByFilter(filter),
    });

    const updateItemFx = createEffect<FullEntity, FullEntity, Error>({
      handler: (mt) => service.updateOne(mt),
    });

    const deleteItemFx = createEffect<TUuid, TypeOrmDeleteResult, Error>({
      handler: (uuid) => service.deleteOne(uuid),
    });

    const resetItemError = createEvent();
    const getItem = createEvent<TUuid>();
    const getAllDefault = createEvent();
    const getAll = createEvent<TListRequest<FullEntity>>();
    const resetOne = createEvent();
    const resetList = createEvent();
    const setPage = createEvent<number>();
    const setPageSize = createEvent<number>();
    const setFilter = createEvent<any>();
    const setItem = createEvent<FullEntity>();


    const $itemStore = createStore<TItemStore<FullEntity>>(createInitItem());
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
      .on(getAllFx.fail, requestListErrorHandler)
      .reset(resetList);

    $itemStore
      .on(setItem, (prev, item) => ({ ...prev, item }))
      .on(createItemWithoutFetchingListFx.done, nullableResult)
      .on(createItemFx.done, nullableResult)
      .on(getItemFx.done, nullableResult)
      .on(getItemByFilterFx.done, nullableResult)
      .on(updateItemFx.done, nullableResult)
      .on(deleteItemFx.done, () => createInitItem<FullEntity>())
      .on(createItemFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(createItemWithoutFetchingListFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(getItemFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(getItemByFilterFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(updateItemFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(deleteItemFx.pending, (prev, pending) => ({ ...prev, pending }))
      .on(createItemFx.fail, requestItemErrorHandler)
      .on(createItemWithoutFetchingListFx.fail, requestItemErrorHandler)
      .on(getItemFx.fail, requestItemErrorHandler)
      .on(getItemByFilterFx.fail, requestItemErrorHandler)
      .on(updateItemFx.fail, requestItemErrorHandler)
      .on(deleteItemFx.fail, requestItemErrorHandler)
      .on(resetItemError, clearItemErrorHandler)
      .reset(resetOne);

    sample({
      clock: [ListGate.state, getAllDefault],
      source: $listStore,
      fn: ({ limit, page, filter, pending }: TListResponce<FullEntity>) =>
        filter ? { limit, page, filter, pending } : { limit, page, pending },
      target: getAllFx,
    });

    guard({
      clock: ItemGate.state,
      source: ItemGate.state.map((state) => state),
      filter: ItemGate.state.map((state) => !isEmpty(state)),
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
      clock: $itemStore.map(v => v.error),
      target: []
    });

    return {
      resetList,
      resetOne,
      setFilter,
      setPage,
      setPageSize,
      $listStore,
      $itemStore,
      ListGate,
      ItemGate,
      setItem,
      getAllDefault,
      getItem,
      getItemByFilterFx,
      createItemFx,
      createItemWithoutFetchingListFx,
      deleteItemFx,
      updateItemFx,
      getAll,
      resetItemError,
      getAllFx
    };
  }
}


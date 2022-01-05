import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate, useGate } from 'effector-react';
import { Nullable } from '../../../core/types';
import { CrudService } from '../../api';
import {
  createInitItemsWithPagination,
  nullableResult,
  TListRequest,
  TListResponce,
  TypeOrmDeleteResult,
} from '../../api/types';

export const useCrudStores = <D>(url: string) => {
  const $oneStore = createStore<Nullable<D>>(null);
  const $listStore = createStore<TListResponce<D>>(createInitItemsWithPagination<D>());

  const service = new CrudService<D>(url);

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

  $listStore
    .on(getAllFx.done, nullableResult)
    .on(setPage, (prev, page) => ({ ...prev, page }))
    .on(setPageSize, (prev, limit) => ({ ...prev, limit }))
    .reset(resetList);

  $oneStore
    .on(createFx.done, nullableResult)
    .on(getOneFx.done, nullableResult)
    .on(updateFx.done, nullableResult)
    .on(deleteFx.done, nullableResult)
    .reset(resetOne);

  const Gate = createGate();

  sample({
    clock: [Gate.state],
    source: $listStore,
    fn: (list) => ({ limit: list.limit, page: list.page }),
    target: getAllFx,
  });

  let items: TListResponce<D>;
  $listStore.watch((v) => {
    items = v;
  });

  let item: Nullable<D>;
  $oneStore.watch((v) => {
    item = v;
  });
  //   useGate(Gate, { limit: items.limit, page: items.page });

  //   console.log(4444444444444, items);

  return { item, items, setPage, setPageSize, $listStore };
};

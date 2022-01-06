import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { Nullable } from '../../../core/types';
import { CrudService } from '../../api';
import {
  createInitItemsWithPagination,
  nullableResult,
  TListRequest,
  TListResponce,
  TypeOrmDeleteResult,
} from '../../api/types';

export const createCrudStore = <D>(url: string) => {
  const Gate = createGate();

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
  const setCurrentPage = createEvent<number>();
  const setCurrentPageSize = createEvent<number>();

  const $oneStore = createStore<Nullable<D>>(null);
  const $listStore = createStore<TListResponce<D>>(createInitItemsWithPagination<D>());

  $listStore
    .on(getAllFx.done, nullableResult)
    .on(setCurrentPage, (prev, page) => ({ ...prev, page }))
    .on(setCurrentPageSize, (prev, limit) => ({ ...prev, limit }))
    .reset(resetList);

  $oneStore
    .on(createFx.done, nullableResult)
    .on(getOneFx.done, nullableResult)
    .on(updateFx.done, nullableResult)
    .on(deleteFx.done, nullableResult)
    .reset(resetOne);

  sample({
    clock: [Gate.state],
    source: $listStore,
    fn: (list: TListResponce<D>) => ({ limit: list.limit, page: list.page }),
    target: getAllFx,
  });

  return { setCurrentPage, setCurrentPageSize, $listStore, $oneStore, Gate };
};

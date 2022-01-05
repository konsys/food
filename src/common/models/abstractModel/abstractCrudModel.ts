import { createEffect, createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";
import { Nullable } from "../../../core/types";
import { CrudService } from "../../api";
import { createInitItemsWithPagination, nullableResult, TListRequest, TListResponce, TypeOrmDeleteResult } from "../../api/types";

export const useCrudStores = <D>(url: string) => {

    const oneStore = createStore<Nullable<D>>(null);
    const listStore = createStore<TListResponce<D>>(createInitItemsWithPagination<D>())
    const service = new CrudService<D>(url);

    const createFx = createEffect<D, D, Error>({
        handler: (mt) => service.create(mt),
    });

    const getAllFx = createEffect<TListRequest<D>, TListResponce<D>, Error>(
        {
            handler: (req) => service.getAll(req),
        }
    );

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


    listStore.on(getAllFx.done, (_, { result }) => result)
        .on(setPage, (prev, page) => ({ ...prev, page }))
        .on(setPageSize, (prev, limit) => ({ ...prev, limit }))
        .reset(resetList);

    oneStore.on(createFx.done, nullableResult)
        .on(getOneFx.done, nullableResult)
        .on(updateFx.done, nullableResult)
        .on(deleteFx.done, nullableResult)
        .reset(resetOne);

    const Gate = createGate();

    sample({
        clock: [Gate.state],
        source: listStore,
        fn: (list) => ({ limit: list.limit, page: list.page }),
        target: getAllFx,
    });


    return { oneStore, listStore, Gate }
}

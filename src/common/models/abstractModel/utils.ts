import { THttpResponseError, TItemStore, TListRequest, TListResponce } from "../../api/types";
import { HttpStatus } from "../../utils/constants";

export const nullableResult = <D>(_: TItemStore<D>, { result }: { result: D }) => ({
    item: result ?? null,
    pending: false,
    error: null
});

export const requestItemErrorHandler = <D>(state: TItemStore<D>, { error }: { error: any }): TItemStore<D> => {

    if (error?.response?.data?.statusCode && error?.response?.data?.message) {
        const responseError: THttpResponseError = error.response.data
        return {
            item: state.item,
            pending: false,
            error: responseError
        }
    }
    return {
        item: state.item,
        pending: false,
        error: {
            message: 'Unknown error',
            statusCode: HttpStatus.BAD_REQUEST

        }
    }
};

export const clearItemErrorHandler = <D>(state: TItemStore<D>): TItemStore<D> => ({ ...state, error: null });


export const requestListErrorHandler = <D>({ limit, page, filter, sort }: TListRequest<D>, { error }: { error: any }): TListResponce<D> => {
    if (error?.response?.data?.statusCode && error?.response?.data?.message) {
        const responseError = error.response.data
        return {
            totalRecords: 0,
            items: [],
            limit,
            page,
            filter,
            sort,
            pending: false,
            error: responseError
        }
    }
    return {
        totalRecords: 0,
        items: [],
        limit,
        page,
        filter,
        sort,
        pending: false,
        error: {
            message: 'Unknown error',
            statusCode: 400

        }
    }
};

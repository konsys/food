import { TItemStore, TResponseError } from "../../api/types";

export const nullableResult = <D>(_: TItemStore<D>, { result }: { result: D }) => ({
    item: result ?? null,
    pending: false,
    error: null
});

export const requestErrorHandler = <D>(_: TItemStore<D>, { error }: { error: any }): TItemStore<D> => {
    console.log(234234234, error.response.data.statusCode);
    if (error?.response?.data?.statusCode && error?.response?.data?.message) {
        const responseError = error.response.data
        return {
            item: null,
            pending: false,
            error: responseError
        }
    }
    return {
        item: null,
        pending: false,
        error: {
            message: 'Unknown error',
            statusCode: 400

        }
    }


};


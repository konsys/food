import { NumericDictionaryIteratee } from 'lodash';
import { Nullable } from '../../core/types';

export type TSort = 'asc' | 'desc';

export type TPaginationRequestParams = {
  page: number;
  limit: number;
  sort?: TSort;
};

export type TListRequest<T> = TPaginationRequestParams & {
  filter?: Partial<Record<keyof T, any>>;
  pending?: boolean;
};

export type TListResponce<T> = TListRequest<T> & {
  items: T[];
  totalRecords: number;
};

export type TResponseError = {
  statusCode: number,
  message: string
}

export type TItemStore<T> = {
  item: Nullable<T>;
  pending?: boolean;
  error: Nullable<TResponseError>
};

export const createInitItem = <T>(): TItemStore<T> => ({
  item: null,
  pending: false,
  error: null
});

export const createInitItemsWithPagination = <T>(): TListResponce<T> => ({
  items: [],
  limit: 10,
  page: 1,
  totalRecords: 0,
  pending: false,
});



export type TypeOrmDeleteResult = { affected?: number | null };

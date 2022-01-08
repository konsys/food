import { Nullable } from '../../core/types';

export type TSort = 'asc' | 'desc';

export type TPaginationRequestParams = {
  page: number;
  limit: number;
  sort?: TSort;
};

export type TListRequest<T> = TPaginationRequestParams & {
  filter?: Record<keyof T, any>;
  loading: boolean;
};

export type TListResponce<T> = TListRequest<T> & {
  items: T[];
  totalRecords: number;
};

export type TRequestProcess<T> = {
  item: Nullable<T>;
  loading: boolean;
};

export const createInitItem = <T>(): TRequestProcess<T> => ({
  item: null,
  loading: false,
});

export const createInitItemsWithPagination = <T>(): TListResponce<T> => ({
  items: [],
  limit: 10,
  page: 1,
  totalRecords: 0,
  loading: false,
});

export const nullableResult = <D>(_: TRequestProcess<D>, { result }: { result: D }) => ({
  item: result,
  loading: false,
});

export type TypeOrmDeleteResult = { affected?: number | null };

import { Nullable } from '../../core/types';

export type TSort = 'asc' | 'desc';

export type TPaginationRequestParams = {
  page: number;
  limit: number;
  sort?: TSort;
};

export type TListRequest<T> = TPaginationRequestParams & {
  filter?: Record<keyof T, any>;
  pending: boolean;
};

export type TListResponce<T> = TListRequest<T> & {
  items: T[];
  totalRecords: number;
};

export type TRequestProcess<T> = {
  item: Nullable<T>;
  pending: boolean;
};

export const createInitItem = <T>(): TRequestProcess<T> => ({
  item: null,
  pending: false,
});

export const createInitItemsWithPagination = <T>(): TListResponce<T> => ({
  items: [],
  limit: 10,
  page: 1,
  totalRecords: 0,
  pending: false,
});

export const nullableResult = <D>(_: TRequestProcess<D>, { result }: { result: D }) => ({
  item: result,
  pending: false,
});

export type TypeOrmDeleteResult = { affected?: number | null };

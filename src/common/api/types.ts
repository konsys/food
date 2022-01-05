export type TSort = 'asc' | 'desc';

export type TPaginationRequestParams = {
  page: number;
  limit: number;
  sort?: TSort;
};

export type TListRequest<T> = TPaginationRequestParams & {
  filter?: Record<keyof T, any>;
};

export type TListResponce<T> = TListRequest<T> & {
  items: T[];
  totalRecords: number;
};

export const createInitItemsWithPagination = <T>(): TListResponce<T> => ({
  items: [],
  limit: 10,
  page: 1,
  totalRecords: 0,
});

export const nullableResult = <R, T extends { result: any }>(_: R, { result }: T) => result ?? null;

export type TypeOrmDeleteResult = { affected?: number | null };

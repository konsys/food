export type TPagination = {
  page: number;
  totalRecords?: number;
  limit: number;
};

export type TItemsWithPagination<T> = TPagination & {
  items: T[];
};

export const createInitItemsWithPagination = <T>(): TItemsWithPagination<T> => ({
  items: [],
  limit: 10,
  page: 1,
  totalRecords: 0,
});

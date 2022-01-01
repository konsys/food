export type TPagination<T> = {
  items: T[];
  page: number;
  totalRecords?: number;
  limit: number;
};

export const initPagination: TPagination<unknown> = {
  items: [],
  limit: 10,
  page: 1,
  totalRecords: 0,
};

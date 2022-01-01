export type TSort = 'asc' | 'desc';

export type TPaginationRequestParams = {
  page: number;
  limit: number;
  sort?: TSort;
};

export type TPaginationWithFilters = TPaginationRequestParams & {
    filter?: Record<string, any>
  };

export type TPagination = TPaginationRequestParams & {
    totalRecords: number;
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
  
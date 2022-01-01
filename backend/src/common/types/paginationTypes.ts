export type TItemsRequestParams = {
    page: number;
    limit: number;
  };

export type TPagination = TItemsRequestParams & {
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
  
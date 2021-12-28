import { createStore } from 'effector';

export type TPagination = {
  page: number;
  totalRecords?: number;
  limit: number;
};

export const $pagination = createStore<TPagination>({
  page: 0,
  totalRecords: 0,
  limit: 0,
});

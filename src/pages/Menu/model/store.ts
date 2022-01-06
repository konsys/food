import { sample } from 'effector';
import { createGate } from 'effector-react';
import { TListResponce } from '../../../common/api/types';
import { createCrudStore } from '../../../common/models/abstractModel/abstractCrudModel';
import { MenuDto } from './types';

export const MenuListGate = createGate();

const { $listStore, setCurrentPage, setCurrentPageSize, getAllFx } =
  createCrudStore<MenuDto>('/menu');

sample({
  clock: [MenuListGate.state],
  source: $listStore,
  fn: (list: TListResponce<MenuDto>) => ({ limit: list.limit, page: list.page }),
  target: getAllFx,
});

export const setPage = setCurrentPage;
export const setPageSize = setCurrentPageSize;

export const $menuListStore = $listStore;

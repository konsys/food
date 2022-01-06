import { sample } from 'effector';
import { TListResponce } from '../../../common/api/types';
import { createCrudStore } from '../../../common/models/abstractModel/abstractCrudModel';
import { MenuDto } from './types';

const { $listStore, setCurrentPage, setCurrentPageSize, getAllFx, Gate } =
  createCrudStore<MenuDto>('/menu');

sample({
  clock: [Gate.state],
  source: $listStore,
  fn: (list: TListResponce<MenuDto>) => ({ limit: list.limit, page: list.page }),
  target: getAllFx,
});

export const setPage = setCurrentPage;
export const setPageSize = setCurrentPageSize;
export const $menuListStore = $listStore;
export const MenuListGate = Gate;

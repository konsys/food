import { combine, createDomain } from 'effector';
import { CrudService } from '../../../../common/api';
import {
  $pagination,
  createInitItemsWithPagination,
  TItemsWithPagination,
} from '../../../../common/api/types';
import { MenuTypeDto } from './types';

const MenuDomain = createDomain('MenuDomain');

const URL = `/menu-type`;

const service = new CrudService<MenuTypeDto>(URL);

export const resetMenuTypeList = MenuDomain.event();
export const resetMenuType = MenuDomain.event();

export const createMenuTypeFx = MenuDomain.effect<MenuTypeDto, MenuTypeDto, Error>({
  handler: (mt) => service.create(mt),
});

export const getAllMenuTypeFx = MenuDomain.effect<void, TItemsWithPagination<MenuTypeDto>, Error>({
  handler: () => service.getAll(),
});

export const getOneMenuTypeFx = MenuDomain.effect<number, MenuTypeDto, Error>({
  handler: (id) => service.getOne(id),
});

export const updateMenuTypeFx = MenuDomain.effect<MenuTypeDto, MenuTypeDto, Error>({
  handler: (mt) => service.updateOne(mt),
});

export const deleteMenuTypeFx = MenuDomain.effect<number, number, Error>({
  handler: (id) => service.deleteOne(id),
});

export const $menuTypeList = MenuDomain.store<TItemsWithPagination<MenuTypeDto>>(
  createInitItemsWithPagination<MenuTypeDto>()
)
  .on(getAllMenuTypeFx.done, (_, { result }) => result)
  .reset(resetMenuTypeList);

export const $menuTypeOne = MenuDomain.store<MenuTypeDto | null>(null)
  .on(createMenuTypeFx.done, (_, { result }) => result)
  .on(updateMenuTypeFx.done, (_, { result }) => result)
  .on(deleteMenuTypeFx.done, () => null)
  .reset(resetMenuType);

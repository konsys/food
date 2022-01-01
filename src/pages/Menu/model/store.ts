import { createDomain } from 'effector';
import { CrudService } from '../../../common/api';
import {
  createInitItemsWithPagination,
  TListRequest,
  TListResponce,
} from '../../../common/api/types';
import { MenuDto } from './types';

const MenuDomain = createDomain('MenuDomain');

const URL = `/menu`;

const service = new CrudService<MenuDto>(URL);

export const resetMenuList = MenuDomain.event();
export const resetMenu = MenuDomain.event();

export const createMenuFx = MenuDomain.effect<MenuDto, MenuDto, Error>({
  handler: (mt) => service.create(mt),
});

export const getAllMenuFx = MenuDomain.effect<TListRequest<MenuDto>, TListResponce<MenuDto>, Error>(
  {
    handler: (req) => service.getAll(req),
  }
);

export const getOneMenuFx = MenuDomain.effect<number, MenuDto, Error>({
  handler: (id) => service.getOne(id),
});

export const updateMenuFx = MenuDomain.effect<MenuDto, MenuDto, Error>({
  handler: (mt) => service.updateOne(mt),
});

export const deleteMenuFx = MenuDomain.effect<number, number, Error>({
  handler: (id) => service.deleteOne(id),
});

export const $menuList = MenuDomain.store<TListResponce<MenuDto>>(
  createInitItemsWithPagination<MenuDto>()
)
  .on(getAllMenuFx.done, (_, { result }) => result)
  .reset(resetMenuList);

export const $menuOne = MenuDomain.store<MenuDto | null>(null)
  .on(createMenuFx.done, (_, { result }) => result)
  .on(updateMenuFx.done, (_, { result }) => result)
  .on(deleteMenuFx.done, () => null)
  .reset(resetMenu);

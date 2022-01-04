import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';
import { CrudService } from '../../../common/api';
import {
  createInitItemsWithPagination,
  nullableResult,
  TListRequest,
  TListResponce,
  TypeOrmDeleteResult,
} from '../../../common/api/types';
import { MenuDto } from './types';

const MenuDomain = createDomain('MenuDomain');

const URL = `/menu`;

const service = new CrudService<MenuDto>(URL);

export const resetMenuList = MenuDomain.event();
export const resetMenu = MenuDomain.event();
export const setPage = MenuDomain.event<number>();

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

export const deleteMenuFx = MenuDomain.effect<number, TypeOrmDeleteResult, Error>({
  handler: (id) => service.deleteOne(id),
});

export const $menuList = MenuDomain.store<TListResponce<MenuDto>>(
  createInitItemsWithPagination<MenuDto>()
)
  .on(getAllMenuFx.done, (_, { result }) => result)
  .on(setPage, (prev, page) => ({ ...prev, page }))
  .reset(resetMenuList);

export const $menuOne = MenuDomain.store<MenuDto | null>(null)
  .on(createMenuFx.done, nullableResult)
  .on(getOneMenuFx.done, nullableResult)
  .on(updateMenuFx.done, nullableResult)
  .on(deleteMenuFx.done, (prev, { result }) => (result?.affected ? null : prev))
  .reset(resetMenu);

export const MenuGate = createGate();

sample({
  clock: [MenuGate.state],
  source: $menuList,
  fn: (list) => ({ limit: list.limit, page: list.page }),
  target: getAllMenuFx,
});

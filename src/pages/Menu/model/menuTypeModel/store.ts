import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';
import { CrudService } from '../../../../common/api';
import {
  createInitItemsWithPagination,
  nullableResult,
  TListRequest,
  TListResponce,
  TypeOrmDeleteResult,
} from '../../../../common/api/types';
import { Nullable } from '../../../../core/types';
import { MenuTypeDto } from './types';

const MenuDomain = createDomain('MenuDomain');

const URL = `/menu-type`;

const service = new CrudService<MenuTypeDto>(URL);

export const resetMenuTypeList = MenuDomain.event();
export const resetMenuType = MenuDomain.event();

export const createMenuTypeFx = MenuDomain.effect<MenuTypeDto, MenuTypeDto, Error>({
  handler: (mt) => service.create(mt),
});

export const getAllMenuTypeFx = MenuDomain.effect<
  TListRequest<MenuTypeDto>,
  TListResponce<MenuTypeDto>,
  Error
>({
  handler: (filters) => service.getAll(filters),
});

export const getOneMenuTypeFx = MenuDomain.effect<number, MenuTypeDto, Error>({
  handler: (id) => service.getOne(id),
});

export const updateMenuTypeFx = MenuDomain.effect<MenuTypeDto, MenuTypeDto, Error>({
  handler: (mt) => service.updateOne(mt),
});

export const deleteMenuTypeFx = MenuDomain.effect<number, TypeOrmDeleteResult, Error>({
  handler: (id) => service.deleteOne(id),
});

export const $menuTypeList = MenuDomain.store<TListResponce<MenuTypeDto>>(
  createInitItemsWithPagination<MenuTypeDto>()
)
  .on(getAllMenuTypeFx.done, (_, { result }) => result)
  .reset(resetMenuTypeList);

export const $menuTypeOne = MenuDomain.store<Nullable<MenuTypeDto>>(null)
  .on(getOneMenuTypeFx.done, nullableResult)
  .on(createMenuTypeFx.done, nullableResult)
  .on(updateMenuTypeFx.done, nullableResult)
  .on(deleteMenuTypeFx.done, (prev, { result }) => (result?.affected ? null : prev))
  .reset(resetMenuType);

export const MenuGate = createGate();

sample({
  clock: [MenuGate.open],
  source: MenuGate.state,
  fn: () => ({ limit: 10, page: 1 }),
  target: getAllMenuTypeFx,
});

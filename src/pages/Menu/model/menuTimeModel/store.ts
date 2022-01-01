import { createDomain } from 'effector';
import { CrudService } from '../../../../common/api';
import {
  createInitItemsWithPagination,
  TListRequest,
  TListResponce,
  TPaginationWithFilters,
} from '../../../../common/api/types';
import { MenuTimeDto } from './types';

const MenuDomain = createDomain('MenuDomain');

const URL = `/menu-time`;

const service = new CrudService<MenuTimeDto>(URL);

export const resetMenuTimeList = MenuDomain.event();
export const resetMenuTime = MenuDomain.event();

export const createMenuTimeFx = MenuDomain.effect<MenuTimeDto, MenuTimeDto, Error>({
  handler: (mt) => service.create(mt),
});

export const getAllMenuFx = MenuDomain.effect<
  TListRequest<MenuTimeDto>,
  TListResponce<MenuTimeDto>,
  Error
>({
  handler: (req) => service.getAll(req),
});

export const getOneMenuTimeFx = MenuDomain.effect<number, MenuTimeDto, Error>({
  handler: (id) => service.getOne(id),
});

export const updateMenuTimeFx = MenuDomain.effect<MenuTimeDto, MenuTimeDto, Error>({
  handler: (mt) => service.updateOne(mt),
});

export const deleteMenuTimeFx = MenuDomain.effect<number, number, Error>({
  handler: (id) => service.deleteOne(id),
});

export const $menuTimeList = MenuDomain.store<TPaginationWithFilters<MenuTimeDto>>(
  createInitItemsWithPagination<MenuTimeDto>()
)
  .on(getAllMenuTimeFx.done, (_, { result }) => result)
  .reset(resetMenuTimeList);

export const $menuTimeOne = MenuDomain.store<MenuTimeDto | null>(null)
  .on(createMenuTimeFx.done, (_, { result }) => result)
  .on(updateMenuTimeFx.done, (_, { result }) => result)
  .on(deleteMenuTimeFx.done, () => null)
  .reset(resetMenuTime);

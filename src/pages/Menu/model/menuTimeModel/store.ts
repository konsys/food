import { combine, createDomain } from 'effector';
import { CrudService } from '../../../../common/api';
import { $pagination, TPagination } from '../../../../common/api/types';
import { MenuTimeDto } from './types';

const MenuDomain = createDomain('MenuDomain');

const URL = `/menu-time`;

const service = new CrudService<MenuTimeDto>(URL);

export const resetMenuTimeList = MenuDomain.event();
export const resetMenuTime = MenuDomain.event();

export const createMenuTimeFx = MenuDomain.effect<MenuTimeDto, MenuTimeDto, Error>({
  handler: (mt) => service.create(mt),
});

export const getAllMenuTimeFx = MenuDomain.effect<void, TPagination<MenuTimeDto>, Error>({
  handler: () => service.getAll(),
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

const $many = MenuDomain.store<MenuTimeDto[]>([])
  .on(getAllMenuTimeFx.done, (_, { result }) => result)
  .reset(resetMenuTimeList);

export const $menuTimeOne = MenuDomain.store<MenuTimeDto | null>(null)
  .on(createMenuTimeFx.done, (_, { result }) => result)
  .on(updateMenuTimeFx.done, (_, { result }) => result)
  .on(deleteMenuTimeFx.done, () => null)
  .reset(resetMenuTime);

export const $menuTimeList = combine({
  records: $many,
  pagination: $pagination,
});

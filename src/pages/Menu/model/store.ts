import { combine, createDomain } from 'effector';
import { CrudService } from '../../../common/api';
import { $pagination } from '../../../common/api/store';
import { MenuDto } from './types';

const MenuDomain = createDomain('MenuDomain');

const URL = `/menu-time`;

const service = new CrudService<MenuDto>(URL);

export const resetMenuTimeList = MenuDomain.event();
export const resetMenuTime = MenuDomain.event();

export const createMenuTimeFx = MenuDomain.effect<MenuDto, MenuDto, Error>({
  handler: (mt) => service.create(mt),
});

export const getAllMenuTimeFx = MenuDomain.effect<void, MenuDto[], Error>({
  handler: () => service.getAll(),
});

export const getOneMenuTimeFx = MenuDomain.effect<number, MenuDto, Error>({
  handler: (id) => service.getOne(id),
});

export const updateMenuTimeFx = MenuDomain.effect<MenuDto, MenuDto, Error>({
  handler: (mt) => service.updateOne(mt),
});

export const deleteMenuTimeFx = MenuDomain.effect<number, number, Error>({
  handler: (id) => service.deleteOne(id),
});

const $many = MenuDomain.store<MenuDto[]>([])
  .on(getAllMenuTimeFx.done, (_, { result }) => result)
  .reset(resetMenuTimeList);

export const $menuTimeOne = MenuDomain.store<MenuDto | null>(null)
  .on(createMenuTimeFx.done, (_, { result }) => result)
  .on(updateMenuTimeFx.done, (_, { result }) => result)
  .on(deleteMenuTimeFx.done, () => null)
  .reset(resetMenuTime);

export const $menuTimeList = combine({
  records: $many,
  pagination: $pagination,
});

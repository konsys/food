import { createDomain } from 'effector';
import { CrudService } from '../../../common/api';
import { MenuTime } from './types';

const MenuDomain = createDomain('MenuDomain');

const URL = `/menu-time`;

const service = new CrudService<MenuTime>(URL);

export const resetMenuTimeList = MenuDomain.event();
export const resetMenuTime = MenuDomain.event();

export const createMenuTimeFx = MenuDomain.effect<MenuTime, MenuTime, Error>({
  handler: (mt) => service.create(mt),
});

export const getAllMenuTimeFx = MenuDomain.effect<void, MenuTime[], Error>({
  handler: () => service.getAll(),
});

export const getOneMenuTimeFx = MenuDomain.effect<number, MenuTime, Error>({
  handler: (id) => service.getOne(id),
});

export const updateMenuTimeFx = MenuDomain.effect<MenuTime, MenuTime, Error>({
  handler: (mt) => service.updateOne(mt),
});

export const deleteMenuTimeFx = MenuDomain.effect<number, number, Error>({
  handler: (id) => service.deleteOne(id),
});

export const $menuTimeList = MenuDomain.store<MenuTime[]>([])
  .on(getAllMenuTimeFx.done, (_, { result }) => result)
  .reset(resetMenuTimeList);

export const $menuTime = MenuDomain.store<MenuTime | null>(null)
  .on(createMenuTimeFx.done, (_, { result }) => result)
  .reset(resetMenuTime);

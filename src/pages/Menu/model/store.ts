import { createDomain } from 'effector';
import { createTimeMenu, getAllTimeMenu } from './api';
import { MenuTime } from './types';

const MenuDomain = createDomain('MenuDomain');

export const resetMenuTimeList = MenuDomain.event();
export const resetMenuTime = MenuDomain.event();

export const createMenuTimeFx = MenuDomain.effect<MenuTime, MenuTime, Error>({
  handler: createTimeMenu,
});

export const getAllMenuTimeFx = MenuDomain.effect<void, MenuTime[], Error>({
  handler: getAllTimeMenu,
});

export const $menuTimeList = MenuDomain.store<MenuTime[]>([])
  .on(getAllMenuTimeFx.done, (_, { result }) => result)
  .reset(resetMenuTimeList);

export const $menuTime = MenuDomain.store<MenuTime | null>(null)
  .on(createMenuTimeFx.done, (_, { result }) => result)
  .reset(resetMenuTime);

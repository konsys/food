import { combine, createDomain } from 'effector';
import { CrudService } from '../../../../common/api';
import { $pagination } from '../../../../common/api/store';
import { TMenuType } from './types';

const MenuDomain = createDomain('MenuDomain');

const URL = `/menu-type`;

const service = new CrudService<TMenuType>(URL);

export const resetMenuTypeList = MenuDomain.event();
export const resetMenuType = MenuDomain.event();

export const createMenuTypeFx = MenuDomain.effect<TMenuType, TMenuType, Error>({
  handler: (mt) => service.create(mt),
});

export const getAllMenuTypeFx = MenuDomain.effect<void, TMenuType[], Error>({
  handler: () => service.getAll(),
});

export const getOneMenuTypeFx = MenuDomain.effect<number, TMenuType, Error>({
  handler: (id) => service.getOne(id),
});

export const updateMenuTypeFx = MenuDomain.effect<TMenuType, TMenuType, Error>({
  handler: (mt) => service.updateOne(mt),
});

export const deleteMenuTypeFx = MenuDomain.effect<number, number, Error>({
  handler: (id) => service.deleteOne(id),
});

const $many = MenuDomain.store<TMenuType[]>([])
  .on(getAllMenuTypeFx.done, (_, { result }) => result)
  .reset(resetMenuTypeList);

export const $menuTypeOne = MenuDomain.store<TMenuType | null>(null)
  .on(createMenuTypeFx.done, (_, { result }) => result)
  .on(updateMenuTypeFx.done, (_, { result }) => result)
  .on(deleteMenuTypeFx.done, () => null)
  .reset(resetMenuType);

export const $menuTypeList = combine({
  records: $many,
  pagination: $pagination,
});

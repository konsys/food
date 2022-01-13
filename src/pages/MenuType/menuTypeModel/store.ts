import { createDomain } from 'effector';
import { CrudService } from '../../../common/api';
import { createInitItem, createInitItemsWithPagination, nullableResult, TListRequest, TListResponce, TRequestProcess, TypeOrmDeleteResult } from '../../../common/api/types';
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

export const $menuTypeOne = MenuDomain.store<TRequestProcess<MenuTypeDto>>(
  createInitItem<MenuTypeDto>()
)
  .on(getOneMenuTypeFx.done, nullableResult)
  .on(createMenuTypeFx.done, nullableResult)
  .on(updateMenuTypeFx.done, nullableResult)
  .on(deleteMenuTypeFx.done, (prev, { result }: { result: TypeOrmDeleteResult }) =>
    result.affected ? createInitItem<MenuTypeDto>() : prev
  )
  .reset(resetMenuType);

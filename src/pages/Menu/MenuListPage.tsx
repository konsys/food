import { useGate, useStore } from 'effector-react';
import React, { ReactElement, useState } from 'react';
import { CrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { MenuList } from './components';
import { MenuDto } from './model/types';

export enum EFoodType {
  ALL = 'All',
  DRINKS = 'Drinks',
  SALADS = 'Salads',
  HOT = 'Hot',
}

const MenuCrud = new CrudStore<MenuDto>('/menu');
const { $listStore, setPage, setPageSize, Gate, setFilter } = MenuCrud.createCrudStore();

export const MenuListPage = (): ReactElement => {
  const menu = useStore($listStore);
  useGate(Gate, { limit: menu.limit, page: menu.page, filter: menu.filter });
  const [activeFilter, setActiveFilter] = useState<EFoodType>(EFoodType.ALL);
  return (
    <>
      <MenuList
        menu={menu}
        setPage={setPage}
        setPageSize={setPageSize}
        activeFilter={activeFilter}
        setActiveFilter={(v) => {
          setActiveFilter(v);
          v !== EFoodType.ALL
            ? setFilter({ menuType: { name: v.toLowerCase() } })
            : setFilter(null);
        }}
      />
    </>
  );
};
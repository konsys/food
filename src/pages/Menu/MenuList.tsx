import { useGate, useStore } from 'effector-react';
import React, { ReactElement, useState } from 'react';
import { createCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { CafeMenu } from './components';
import { MenuDto } from './model/types';

export enum EFoodType {
  ALL = 'All',
  DRINKS = 'Drinks',
  SALADS = 'Salads',
  HOT = 'Hot',
}

const { $listStore, setPage, setPageSize, Gate, setFilter } = createCrudStore<MenuDto>('/menu');

export const MenuList = (): ReactElement => {
  const items = useStore($listStore);
  useGate(Gate, { limit: items.limit, page: items.page, filter: items.filter });
  const [activeFilter, setActiveFilter] = useState<EFoodType>(EFoodType.ALL);
  return (
    <>
      <CafeMenu
        foodItems={items}
        setPage={setPage}
        setPageSize={setPageSize}
        activeFilter={activeFilter}
        setActiveFilter={(v) => {
          setActiveFilter(v);
          setFilter({ name: 'fwefeh' });
        }}
      />
    </>
  );
};

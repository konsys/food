import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { createCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { CafeMenu } from './components';
import { MenuDto } from './model/types';

const { $listStore, setCurrentPage, setCurrentPageSize, Gate } = createCrudStore<MenuDto>('/menu');

export const MenuList = (): ReactElement => {
  const items = useStore($listStore);
  useGate(Gate, { limit: items.limit, page: items.page });

  return (
    <>
      <CafeMenu foodItems={items} setPage={setCurrentPage} setPageSize={setCurrentPageSize} />
    </>
  );
};

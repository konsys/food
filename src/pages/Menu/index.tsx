import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { useCrudStores } from '../../common/models/abstractModel/abstractCrudModel';
import { CafeMenu } from './components';
import { MenuDto } from './model/types';

export const Menu = (): ReactElement => {
  const { $listStore, Gate, setPage, setPageSize } = useCrudStores<MenuDto>('/menu');
  const list = useStore($listStore);
  useGate(Gate, { limit: list.limit, page: list.page });

  return (
    <>
      <CafeMenu foodItems={list} setPage={setPage} setPageSize={setPageSize} />
    </>
  );
};

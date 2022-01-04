import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { CafeMenu } from './components';
import { $menuList, MenuGate, setPage, setPageSize } from './model/store';

export const Menu = (): ReactElement => {
  const list = useStore($menuList);
  useGate(MenuGate, { limit: list.limit, page: list.page });

  return (
    <>
      <CafeMenu foodItems={list} setPage={setPage} setPageSize={setPageSize} />
    </>
  );
};

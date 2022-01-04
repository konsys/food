import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { CafeMenu } from './components';
import { $menuList, MenuGate, setPage } from './model/store';

export const Menu = (): ReactElement => {
  useGate(MenuGate, { limit: 10, page: 1 });
  const list = useStore($menuList);
  return (
    <>
      <CafeMenu foodItems={list} setPage={setPage} />
    </>
  );
};

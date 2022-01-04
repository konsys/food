import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { CafeMenu } from './components';
import { $menuList, MenuGate } from './model/store';

export default function Menu(): ReactElement {
  useGate(MenuGate, { limit: 10, page: 1 });
  const list = useStore($menuList);
  return (
    <>
      <CafeMenu foodItems={list} />
    </>
  );
}

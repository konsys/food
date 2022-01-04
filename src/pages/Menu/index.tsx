import { useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { CafeMenu } from './components';
import { $menuList } from './model/store';

export default function Menu(): ReactElement {
  const list = useStore($menuList);
  return (
    <>
      <CafeMenu foodItems={list} />
    </>
  );
}

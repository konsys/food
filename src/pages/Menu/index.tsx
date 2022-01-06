import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { CafeMenu } from './components';
import { $menuListStore, MenuListGate, setPage, setPageSize } from './model/store';

export const Menu = (): ReactElement => {
  const items = useStore($menuListStore);
  useGate(MenuListGate, { limit: items.limit, page: items.page });

  return (
    <>
      <CafeMenu foodItems={items} setPage={setPage} setPageSize={setPageSize} />
    </>
  );
};

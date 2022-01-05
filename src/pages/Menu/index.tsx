import { createStore } from 'effector';
import { useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { createInitItemsWithPagination, TListResponce } from '../../common/api/types';
import { useCrudStores } from '../../common/models/abstractModel/abstractCrudModel';
import { Nullable } from '../../core/types';
import { CafeMenu } from './components';
import { MenuDto } from './model/types';

export const Menu = (): ReactElement => {
  // const $oneStore = createStore<Nullable<MenuDto>>(null);
  // const $listStore = createStore<TListResponce<MenuDto>>(createInitItemsWithPagination<MenuDto>());

  const { setPage, setPageSize, items } = useCrudStores<MenuDto>('/menu');

  // const items = useStore($listStore);
  return (
    <>
      <CafeMenu foodItems={items} setPage={setPage} setPageSize={setPageSize} />
    </>
  );
};

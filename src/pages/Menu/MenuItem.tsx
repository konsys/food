import React, { ReactElement } from 'react';
import { createCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { MenuDto } from './model/types';

const { $listStore, setCurrentPage, setCurrentPageSize, Gate } = createCrudStore<MenuDto>('/menu');

export const MenuItem = (): ReactElement => {
  return <>MenuItem {1}</>;
};

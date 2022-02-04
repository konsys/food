import { RouteProps } from 'react-router-dom';
import { MenuListPage } from '../pages/Menu/MenuListPage';
import { NotFound } from '../pages/NotFound';
import { EPathName, TPath } from './types';

export const pathNames: Record<EPathName, TPath> = {
  HOME: { path: '/', name: 'Главная' },
  NOT_FOUND: { path: '/', name: 'Страница не найдена' },
};

const { HOME } = pathNames;

export const paths: Record<EPathName, RouteProps> = {
  HOME: {
    path: HOME.path,
    element: MenuListPage,
  },

  NOT_FOUND: {
    path: '*',
    element: NotFound,
  },
};

export const getRouteByPath = (path: string): TPath | null => {
  let result = null;
  Object.keys(pathNames).forEach((key) => {
    const p = pathNames[key as EPathName];

    if (p.path === path) {
      result = p;
    }
  });
  return result;
};

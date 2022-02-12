import { RouteProps } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import RestarauntMenu from '../pages/RestarauntMenu/RestarauntMenu';
import Restaraunts from '../pages/Restaurants/Restaraunts';
import { EPathName, TPath } from './types';

export const pathNames: Record<EPathName, TPath> = {
  HOME: { path: '/', name: 'Главная' },
  MENU: { path: '/restaraunts/:uuid', name: 'Меню' },
  NOT_FOUND: { path: '/', name: 'Страница не найдена' },
};

const { HOME, MENU } = pathNames;

export const paths: Record<EPathName, RouteProps> = {
  HOME: {
    path: HOME.path,
    element: Restaraunts,
  },

  MENU: {
    path: MENU.path,
    element: RestarauntMenu,
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

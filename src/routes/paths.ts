import { RouteProps } from 'react-router-dom';
import { About } from '../pages/About';
import { Contacts } from '../pages/Contacts';
import FoodMenu from '../pages/FoodMenu';
import { LoginPage } from '../pages/Login/LoginPage';
import NotFound from '../pages/NotFound';
import { EPathName, TPath } from './types';

export const pathNames: Record<EPathName, TPath> = {
  FOOD_MENU: { path: '/food-menu', name: 'Меню' },
  ABOUT: { path: '/about', name: 'О нас' },
  CONTACTS: { path: '/contacts', name: 'Контакты' },
  LOGIN: { path: '/login', name: 'Войти' },
  HOME: { path: '/', name: 'Главная' },
  NOT_FOUND: { path: '/not_found', name: 'Не найдено' },
};

const { HOME, ABOUT, CONTACTS, LOGIN, FOOD_MENU } = pathNames;

export const paths: Record<EPathName, RouteProps> = {
  HOME: {
    path: HOME.path,
    element: FoodMenu,
  },
  ABOUT: {
    path: ABOUT.path,
    element: About,
  },
  FOOD_MENU: {
    path: FOOD_MENU.path,
    element: FoodMenu,
  },
  CONTACTS: {
    path: CONTACTS.path,
    element: Contacts,
  },
  LOGIN: {
    path: LOGIN.path,
    element: LoginPage,
  },

  NOT_FOUND: {
    path: '*',
    element: NotFound,
  },
};

export const getRouteByPath = (path: string) => {
  Object.keys(pathNames).forEach(function (key) {
    const p = pathNames[key as EPathName];
    if (p.path === path) {
      return p;
    }
  });
  return null;
};

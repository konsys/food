import { RouteProps } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import Order from '../pages/Checkout/Checkout';
import RestaurantMenu from '../pages/RestaurantMenu/RestaurantMenu';
import Restaurants from '../pages/Restaurants/Restaurants';
import { EPathName, TPath } from './types';

export const pathNames: Record<EPathName, TPath> = {
  HOME: { path: '/', name: 'Главная' },
  MENU: { path: '/restaurants/:uuid', name: 'Меню' },
  CHECKOUT: { path: '/checkout/:uuid', name: 'Заказ' },
  NOT_FOUND: { path: '/', name: 'Страница не найдена' },
};

const { HOME, MENU, CHECKOUT } = pathNames;

export const paths: Record<EPathName, RouteProps> = {
  HOME: {
    path: HOME.path,
    element: Restaurants,
  },

  MENU: {
    path: MENU.path,
    element: RestaurantMenu,
  },

  CHECKOUT: {
    path: CHECKOUT.path,
    element: Order,
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

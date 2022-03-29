import { RouteProps } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import Order from '../pages/Checkout/Checkout';
import RestaurantMenu from '../pages/RestaurantMenu/RestaurantMenu';
import Restaurants from '../pages/Restaurants/Restaurants';
import { EPathName, TPath } from './types';
import Cart from '../pages/Cart/Cart';
import OrderCompletedPage from '../pages/Order/OrderCompleted/OrderCompletedPage';

export const pathNames: Record<EPathName, TPath> = {
  HOME: { path: '/', name: 'Главная', basePath: '/' },
  RESTAURANTS: { path: '/restaurants/:uuid', name: 'Меню', basePath: '/restaurants' },
  CHECKOUT: { path: '/checkout/:uuid', name: 'Заказ', basePath: '/checkout' },
  ORDER_COMPLETED: { path: '/order-completed/:uuid', name: 'Заказ оформлен', basePath: '/order-completed' },
  CART: { path: '/cart/:uuid', name: 'Корзина', basePath: '/cart' },
  NOT_FOUND: { path: '/', name: 'Страница не найдена', basePath: '/' },
};

const { HOME, RESTAURANTS, CHECKOUT, CART, ORDER_COMPLETED } = pathNames;

export const paths: Record<EPathName, RouteProps> = {
  HOME: {
    path: HOME.path,
    element: Restaurants
  },

  RESTAURANTS: {
    path: RESTAURANTS.path,
    element: RestaurantMenu,
  },

  CHECKOUT: {
    path: CHECKOUT.path,
    element: Order,
  },

  ORDER_COMPLETED: {
    path: ORDER_COMPLETED.path,
    element: OrderCompletedPage,
  },

  CART: {
    path: CART.path,
    element: Cart,
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

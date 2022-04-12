import { RouteProps } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import Order from '../pages/Checkout/Checkout';
import Restaurants from '../pages/Restaurants/Restaurants';
import { EPathName, TPath } from './types';
import Cart from '../pages/Cart/Cart';
import OrderCompletedPage from '../pages/Order/OrderCompleted/OrderCompletedPage';
import MainPage from '../pages/Main/MainPage';

export const pathNames: Record<EPathName, TPath> = {
  HOME: { path: '/', basePath: '/' },
  RESTAURANTS: { path: '/restaurants', basePath: '/restaurants' },
  CHECKOUT: { path: '/checkout/:uuid', basePath: '/checkout' },
  ORDER_COMPLETED: { path: '/order-completed/:uuid', basePath: '/order-completed' },
  CART: { path: '/cart/:uuid', basePath: '/cart' },
  NOT_FOUND: { path: '/', basePath: '/' },
};

type TRouterTypes = RouteProps & {
  name: string
}

const { HOME, RESTAURANTS, CHECKOUT, CART, ORDER_COMPLETED } = pathNames;


export const paths: Record<EPathName, TRouterTypes> = {
  HOME: {
    path: HOME.path,
    element: MainPage,
    name: 'Главная'
  },

  RESTAURANTS: {
    path: RESTAURANTS.path,
    element: Restaurants,
    name: 'Рестораны'
  },

  CHECKOUT: {
    path: CHECKOUT.path,
    element: Order,
    name: 'Заказ'
  },

  ORDER_COMPLETED: {
    path: ORDER_COMPLETED.path,
    element: OrderCompletedPage,
    name: 'Заказ'
  },

  CART: {
    path: CART.path,
    element: Cart,
    name: 'Корзина'
  },

  NOT_FOUND: {
    path: '*',
    element: NotFound,
    name: 'Не найдена'
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


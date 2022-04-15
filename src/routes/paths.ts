import { RouteProps } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import Order from '../pages/Checkout/Checkout';
import Restaurants from '../pages/Restaurants/Restaurants';
import { EPathName, TPath } from './types';
import Cart from '../pages/Cart/Cart';
import OrderCompletedPage from '../pages/Order/OrderCompleted/OrderCompletedPage';
import MainPage from '../pages/Main/MainPage';
import RestaurantMenu from '../pages/RestaurantMenu/RestaurantMenu';
import { TBreadcrumb } from '../modules/breadcrumbs/types';

export const pathNames: Record<EPathName, TPath> = {
  HOME: { path: '/', basePath: '/' },
  RESTAURANTS: { path: '/restaurants', basePath: '/restaurants' },
  RESTAURANT_MENU: { path: '/restaurants/:uuid', basePath: '/restaurants' },
  CHECKOUT: { path: '/checkout/:uuid', basePath: '/checkout' },
  ORDER_COMPLETED: { path: '/order-completed/:uuid', basePath: '/order-completed' },
  CART: { path: '/cart/:uuid', basePath: '/cart' },
  NOT_FOUND: { path: '/', basePath: '/' },
};

type TRouterTypes = RouteProps & {
  name: string
}

const { HOME, RESTAURANTS, RESTAURANT_MENU, CHECKOUT, CART, ORDER_COMPLETED } = pathNames;


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

  RESTAURANT_MENU: {
    path: RESTAURANT_MENU.path,
    element: RestaurantMenu,
    name: 'Меню'
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


export const homeBreabcrums: TBreadcrumb = {
  path: paths.HOME.path ?? '',
  title: paths.HOME.name,
  key: 'home'
}

export const restaurantBreabcrums: TBreadcrumb = {
  path: paths.RESTAURANTS.path ?? '',
  title: paths.RESTAURANTS.name,
  key: paths.RESTAURANTS.path ?? 'restauranntsKey'
}
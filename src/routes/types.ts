export enum EPathName {
  HOME = 'HOME',
  RESTAURANTS = 'RESTAURANTS',
  RESTAURANT_MENU = 'RESTAURANT_MENU',
  CHECKOUT = 'CHECKOUT',
  CART = 'CART',
  NOT_FOUND = 'NOT_FOUND',
  ORDER_COMPLETED = 'ORDER_COMPLETED',
  REGISTRATION = 'REGISTRATION'
}

export type TPath = {
  path: string;
  basePath: string
};

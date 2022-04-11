export enum EPathName {
  HOME = 'HOME',
  RESTAURANTS = 'RESTAURANTS',
  CHECKOUT = 'CHECKOUT',
  CART = 'CART',
  NOT_FOUND = 'NOT_FOUND',
  ORDER_COMPLETED = 'ORDER_COMPLETED'
}

export type TPath = {
  path: string;
  basePath: string
};

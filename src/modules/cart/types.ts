import { TId, TUuid } from '../../common/types';
import { RestaurantMenuDto } from '../restaurantMenu/types';

export type CartDto = {
  id: TId;
  uuid: TUuid;
  restaurantUuid: TUuid;
  description: string;
  order: TRestaurantMenuOrder[];
  createdAt?: Date;
  status: EOrderStatus;
  orderSum: number;
};

export type TRestaurantMenuOrder = {
  restaurantMenu: RestaurantMenuDto;
  quantity: number;
  id: number;
};

export enum EOrderStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  PAID = 'PAID',
}

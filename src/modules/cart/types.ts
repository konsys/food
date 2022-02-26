import { TId, TUuid } from '../../common/types';
import { RestaurantMenuDto } from '../restaurantMenu/types';

export type CartDto = {
  id: TId;
  uuid: TUuid;
  description: string;
  order: TRestaurantMenuOrder[];
  createdAt?: Date;
  status: EOrderStatus;
};

export type TRestaurantMenuOrder = {
  restaurantMenu: RestaurantMenuDto;
  quantity: number;
};

export enum EOrderStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  PAID = 'PAID',
}

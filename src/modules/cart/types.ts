import { TUuid } from '../../common/types';
import { EOrderStatus } from '../order/types';
import { RestaurantMenuDto } from '../restaurantMenu/types';

export type CartDto = {
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

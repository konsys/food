import { TId } from './../../common/types/index';
import { TUuid } from '../../common/types';

export type CartOrderDto = {
  id: TId;
  uuid: TUuid;
  description: string;
  clientUuid: TUuid;
  order: TOrder;
  createdAt: Date;
};

export type TOrder = {
  user: TUuid;
  orderUuid: TUuid;
  restaurantMenuUuid: TUuid;
  quantity: number;
};

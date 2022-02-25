import { TId } from '../../common/types/index';
import { TUuid } from '../../common/types';

export type CartDto = {
  id: TId;
  uuid: TUuid;
  description: string;
  clientUuid: TUuid;
  order: TOrder;
  createdAt?: Date;
  status: EOrderStatus;
};

export type TOrder = {
  user: TUuid;
  orderUuid: TUuid;
  restaurantMenuUuid: TUuid;
  quantity: number;
};

export enum EOrderStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  PAID = 'PAID',
}

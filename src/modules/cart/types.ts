import { TId, TUuid } from '../../common/types';

export type CartDto = {
  id: TId;
  clientUuid: TUuid;
  uuid: TUuid;
  description: string;
  order: TOrder[];
  createdAt?: Date;
  status: EOrderStatus;
};

export type TOrder = {
  restaurantMenuUuid: TUuid;
  quantity: number;
};

export enum EOrderStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  PAID = 'PAID',
}

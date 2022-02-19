import { TId, TUuid } from '../../common/types';

export type DeliveryDto = {
  id: TId;
  uuid: TUuid;
  type: EDeliveryType;
  price: number;
  fullTime: string;
};

export enum EDeliveryType {
  LONG_DISTANCE = 'LONG_DISTANCE',
  STANDARD = 'STANDARD',
  HIGH_DEMAND = 'HIGH_DEMAND',
}

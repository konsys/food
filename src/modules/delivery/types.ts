import { TId, TUuid } from '../../common/types';

export type DeliveryDto = {
  uuid: TUuid;
  type: EDeliveryType;
  price: number;
  minTimeMinutes: number;
  maxTimeMinutes: number;
};

export enum EDeliveryType {
  LONG_DISTANCE = 'LONG_DISTANCE',
  STANDARD = 'STANDARD',
  HIGH_DEMAND = 'HIGH_DEMAND',
}

export enum DeliveryRangeDto {
  'LONG',
  'STANDARD',
  'HIGHT_DEMAND',
}

import { DictionaryDto } from '../../core/dictionary/types';
import { ImageDto } from '../image/model/types';
import { RatingDto } from '../restaurantMenu/types';

export type RestaurantDto = {
  deliveryType: EDeliveryType;
  deliveryFullTime?: string;
  price: number;
  image?: ImageDto;
  imgId?: number;
  logoUrl: string;
  rating: 1 | 2 | 3 | 4 | 5;
  ratingColor: ERatingColor;
  priceRate: RatingDto;
  foodType: EFoodType;
} & DictionaryDto;

export enum EFoodType {
  EUROPIAN = 'Европейская кухня',
  GEORGIAN = 'Европейская кухня',
  CHINEESE = 'Китайская кухня',
  JAPAN = 'Японская кухня',
  INDIAN = 'Индийская кухня',
}

export enum EDeliveryType {
  LONG_DISTANCE = 'LONG_DISTANCE',
  STANDARD = 'STANDARD',
  HIGH_DEMAND = 'HIGH_DEMAND',
}

export enum ERatingColor {
  WARNING_COLOR = 'WARNING_COLOR',
  SUCCESS_COLOR = 'SUCCESS_COLOR',
}

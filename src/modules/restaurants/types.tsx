import { TLinkWithText } from '../../common/types/utilTypes';
import { DictionaryDto } from '../../core/dictionary/types';
import { ImageDto } from '../image/model/types';
import { DeliveryRangeDto, RatingDto } from '../restaurantMenu/types';

export type DeliveryDto = {
  type: EDeliveryType;
  price: number;
  fullTime: string;
};

export type LegalDto = {
  adress: string;
  inn: string;
  kpp?: string;
  ogrn?: string;
} & DictionaryDto;

export type RestaurantDto = {
  image: ImageDto;
  logo: ImageDto;
  openTime: Date;
  closeTime: Date;
  priceRating: RatingDto;
  rating: RatingDto;
  deliveryPrice: number;
  deliveryRange: DeliveryRangeDto;
  maxDeliveryMinutes: number;
  minDeliveryMinutes: number;
  menuItems: TLinkWithText[];
  partner: LegalDto;
  foodType: EFoodType[];
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
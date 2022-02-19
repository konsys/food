import { TLinkWithText } from '../../common/types/utilTypes';
import { DictionaryDto } from '../../core/dictionary/types';
import { ImageDto } from '../image/model/types';
import { LegalDto } from '../legal/types';
import { DeliveryRangeDto, RatingDto } from '../restaurantMenu/types';

export type RestaurantDto = {
  image: ImageDto;
  imageId: number;
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
  legal: LegalDto;
  legalId: number;
  foodType: EFoodType;
} & DictionaryDto;

export enum EFoodType {
  EUROPIAN = 'Европейская кухня',
  GEORGIAN = 'Европейская кухня',
  CHINEESE = 'Китайская кухня',
  JAPAN = 'Японская кухня',
  INDIAN = 'Индийская кухня',
}

export enum ERatingColor {
  WARNING_COLOR = 'WARNING_COLOR',
  SUCCESS_COLOR = 'SUCCESS_COLOR',
}

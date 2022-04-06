import { TUuid } from '../../common/types';
import { DictionaryDto } from '../../core/dictionary/types';
import { ImageDto } from '../image/model/types';
import { LegalDto } from '../legal/types';
import { RatingDto } from '../rating/types';
import { RestaurantMenuDto } from '../restaurantMenu/types';

export type RestaurantDto = {
  image?: ImageDto;
  imageUuid: TUuid;
  logo?: ImageDto;
  logoUuid: TUuid;
  address: string;
  phone: string;
  openTime: Date;
  closeTime: Date;
  priceRating: RatingDto;
  rating: RatingDto;
  legal?: LegalDto;
  legalUuid: TUuid;
  foodType: EFoodType;
  restaurantMenu: RestaurantMenuDto[];
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

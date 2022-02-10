import { TId } from '../../../common/types';
import { RatingDto } from '../../../common/types/dto';
import { DictionaryDto } from '../../../core/dictionary/types';
import { ImageDto } from '../../Image/model/types';

export type RestarauntDto = {
  id: TId;
  name: string;
  uuid: string;
  deliveryType: EDeliveryType;
  deliveryFullTime: string;
  price: number;
  img: ImageDto;
  logoUrl: string;
  rating: number;
  ratingColor: string;
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
  LONG_DISTANCE,
  STANDARD,
  HIGH_DEMAND,
}

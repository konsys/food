import { TLinkWithText } from '../../common/types/utilTypes';
import { DictionaryDto } from '../../core/dictionary/types';
import { ImageDto } from '../image/model/types';

export type RestarauntMenuDto = {
  openTime: Date;
  closeTime: Date;
  priceRating: RatingDto;
  rating: RatingDto;
  restaurantImg: ImageDto;
  deliveryPrice: number;
  deliveryRange: DeliveryRangeDto;
  maxDeliveryMinutes: number;
  minDeliveryMinutes: number;
  menuItems: TLinkWithText[];
  restaurantPartnerAddress: string;
  restaurantPartnerLegal: string;
  restaurantPartnerInn: string;
  restaurantPartnerKPP?: string;
  restaurantPartnerOGRN?: string;
} & DictionaryDto;

export enum DeliveryRangeDto {
  'LONG',
  'STANDARD',
  'HIGHT_DEMAND',
}

export type RatingDto = 1 | 2 | 3 | 4 | 5;

import { TLinkWithText } from '../../common/types/utilTypes';

export type RestarauntDto = {
  openTime: Date;
  closeTime: Date;
  priceRating: RatingDto;
  rating: RatingDto;
  restaurantName: string;
  restaurantImgSrc: string;
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
};

export enum DeliveryRangeDto {
  'LONG',
  'STANDARD',
  'HIGHT_DEMAND',
}

export type RatingDto = 1 | 2 | 3 | 4 | 5;

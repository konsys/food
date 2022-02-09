export type RatingDto = 1 | 2 | 3 | 4 | 5;

export enum DeliveryRangeDto {
  'LONG',
  'STANDARD',
  'HIGHT_DEMAND',
}

export type MenuListDto = {
  name: string;
  imgSrc: string;
  description: string;
  price: number;
  amount?: number;
  weight?: number;
};

import { DictionaryDto } from '../../core/dictionary/types';
import { ImageDto } from '../image/model/types';
import { RestaurantDto } from '../restaurants/types';

export type RestaurantMenuDto = {
  image?: ImageDto;
  imageId?: number;
  price: number;
  weight: number;
  amount?: number;
  restaurant?: RestaurantDto;
  restaurantId: number;
} & DictionaryDto;

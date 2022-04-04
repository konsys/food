import { TUuid } from '../../common/types';
import { DictionaryDto } from '../../core/dictionary/types';
import { ImageDto } from '../image/model/types';
import { RestaurantDto } from '../restaurants/types';

export type RestaurantMenuDto = {
  image?: ImageDto;
  imageUuid?: TUuid;
  price: number;
  weight: number;
  amount?: number;
  restaurant?: RestaurantDto;
  restaurantUuid: TUuid;
  foodCategory?: string;
  foodCategoryUuid: TUuid;
} & DictionaryDto;

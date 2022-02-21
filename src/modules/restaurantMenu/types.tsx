import { DictionaryDto } from '../../core/dictionary/types';
import { ImageDto } from '../image/model/types';

export type RestarauntMenuDto = {
  image?: ImageDto;
  imageId?: number;
  price: number;
  weight: number;
  amount?: number;
} & DictionaryDto;

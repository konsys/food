import { NullableNumber } from '../../../core/types';
import { ImageDto } from '../../../modules/Image/model/types';

export type MenuDto = {
  id: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  timeId: number;
  typeId: number;
  visible: boolean;
  price: number;
  weight: number;
  imgId: NullableNumber;
  image: ImageDto;
};

import { Nullable } from '../../../core/types';
import { ImageDto } from '../../Image/model/types';

export type MenuDto = {
  id?: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  timeId: number;
  typeId: number;
  visible: boolean;
  price: string;
  imgId: Nullable<number>;
  image: ImageDto;
};

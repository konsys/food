import { MenuTimeDto } from './menuTimeModel/types';
import { MenuTypeDto } from './menuTypeModel/types';

export type MenuDto = {
  menuId?: number;

  name: string;

  description: string;

  createdAt?: Date;

  updatedAt?: Date;

  menuTime: MenuTimeDto;

  menuType: MenuTypeDto;

  visible: boolean;
};

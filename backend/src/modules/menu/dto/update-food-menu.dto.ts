import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-food-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuTimeDto } from './create-menu-time.dto';

export class UpdateMenuTimeDto extends PartialType(CreateMenuTimeDto) {}

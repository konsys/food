import { PartialType } from '@nestjs/mapped-types';
import { CreateImageDto } from './create-upload.dto';

export class UpdateImageDto extends PartialType(CreateImageDto) {}

import { PartialType } from '@nestjs/swagger';
import { Images } from "src/entities/images.entity";

export class CreateImageDto  extends PartialType(Images) {}

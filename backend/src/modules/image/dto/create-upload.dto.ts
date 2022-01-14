import { PartialType } from "@nestjs/mapped-types";
import { ImageEntity } from "src/entities/image.entity";

export class CreateImageDto  extends PartialType(ImageEntity) {}

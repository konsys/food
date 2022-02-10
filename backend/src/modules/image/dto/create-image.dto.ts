import { PartialType } from "@nestjs/mapped-types";
import { Images } from "src/entities/images.entity";

export class CreateImageDto  extends PartialType(Images) {}

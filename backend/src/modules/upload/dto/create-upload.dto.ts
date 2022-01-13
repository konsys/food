import { PartialType } from "@nestjs/mapped-types";
import { UploadEntity } from "src/entities/upload.entity";

export class CreateUploadDto  extends PartialType(UploadEntity) {}

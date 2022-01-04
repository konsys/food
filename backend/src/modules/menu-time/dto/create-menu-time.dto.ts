import { PartialType } from "@nestjs/mapped-types";
import { MenuTimeEntity } from "src/entities/menu-time.entity";

export class CreateMenuTimeDto extends PartialType(MenuTimeEntity) { }

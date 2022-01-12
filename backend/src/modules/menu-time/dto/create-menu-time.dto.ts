import { PartialType } from "@nestjs/mapped-types";
import { MenuTimeDict } from "src/entities/menu-time.dict";

export class CreateMenuTimeDto extends PartialType(MenuTimeDict) { }

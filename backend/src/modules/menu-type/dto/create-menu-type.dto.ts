import { PartialType } from "@nestjs/mapped-types";
import { MenuTypeDict } from "src/entities/menu-type.dict";

export class CreateMenuTypeDto extends PartialType(MenuTypeDict) { } 

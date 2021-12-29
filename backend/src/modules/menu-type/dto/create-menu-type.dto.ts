import { PartialType } from "@nestjs/mapped-types";
import { MenuTypeEntity } from "src/entities/menu-type.entity";

export class CreateMenuTypeDto extends PartialType(MenuTypeEntity) {} 

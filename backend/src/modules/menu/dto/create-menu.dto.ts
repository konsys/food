import { PartialType } from "@nestjs/mapped-types";
import { MenuEntity } from "src/entities/menu.entity";

export class CreateMenuDto extends PartialType(MenuEntity) { }

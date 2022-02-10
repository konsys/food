import { PartialType } from "@nestjs/mapped-types";
import { Menu } from "src/entities/menu.entity";

export class CreateMenuDto extends PartialType(Menu) { }

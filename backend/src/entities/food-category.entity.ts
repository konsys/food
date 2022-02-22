import { AbstractDictionary } from "src/abstract/crud/abstractDictionary";
import { Entity } from "typeorm";

@Entity()
export class FoodCategory extends AbstractDictionary {}

import { PartialType } from "@nestjs/mapped-types";
import { Restaurant } from "src/entities/restaurant.entity";

export class CreateRestaurantDto extends PartialType(Restaurant) {}

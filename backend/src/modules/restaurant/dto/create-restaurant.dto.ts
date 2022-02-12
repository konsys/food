import { PartialType } from "@nestjs/swagger";
import { Restaurant } from "src/entities/restaurant.entity";

export class CreateRestaurantDto extends PartialType(Restaurant) {}

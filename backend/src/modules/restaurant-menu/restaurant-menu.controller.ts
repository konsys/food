
import { Controller } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { RestaurantMenu } from 'src/entities/restaraunt-menu.entity';
import { RestaurantMenuService } from './restaurant-menu.service';


@Controller('restaurant-menu')
export class RestaurantMenuController extends AbstractController<RestaurantMenu> {
  constructor(service: RestaurantMenuService) {
    super(service)
  }
}
import { Restaurant } from '../../entities/restaurant.entity';
import { Controller } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { RestaurantService } from './restaurant.service';


@Controller('restaurants')
export class RestaurantController extends AbstractController<Restaurant> {
  constructor(service: RestaurantService) {
    super(service)
  }
}
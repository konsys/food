import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

import { Restaurant } from '../../entities/restaurant.entity';
import { Controller } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { RestaurantService } from './restaurant.service';


@Controller('restaurants')
export class RestaurantController extends AbstractController<Restaurant, CreateRestaurantDto, UpdateRestaurantDto> {
  constructor(service: RestaurantService) {
    super(service)
  }
}
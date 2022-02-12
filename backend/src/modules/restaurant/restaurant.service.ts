
import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from 'src/entities/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';


  @Injectable()
  export class RestaurantService extends AbstractService<Restaurant, CreateRestaurantDto, UpdateRestaurantDto> {
  
    constructor(@InjectRepository(Restaurant)
    repository: Repository<Restaurant>
    ) {
      super(repository);
    }
  }
  

import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { Restaurant } from 'src/entities/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


  @Injectable()
  export class RestaurantService extends AbstractService<Restaurant> {
  
    constructor(@InjectRepository(Restaurant)
    repository: Repository<Restaurant>
    ) {
      super(repository);
    }
  }
  
import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestaurantMenu } from 'src/entities/restaraunt-menu.entity';


  @Injectable()
  export class RestaurantMenuService extends AbstractService<RestaurantMenu> {
  
    constructor(@InjectRepository(RestaurantMenu)
    repository: Repository<RestaurantMenu>
    ) {
      super(repository);
    }
  }
  
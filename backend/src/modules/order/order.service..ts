import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { FoodOrder } from 'src/entities/food-order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService extends AbstractService<FoodOrder> {

  constructor(@InjectRepository(FoodOrder)
  repository: Repository<FoodOrder>
  ) {
    super(repository);
  }
}

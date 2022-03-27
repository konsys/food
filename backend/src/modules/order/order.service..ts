import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { Order } from 'src/entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService extends AbstractService<Order> {

  constructor(@InjectRepository(Order)
  repository: Repository<Order>
  ) {
    super(repository);
  }
}

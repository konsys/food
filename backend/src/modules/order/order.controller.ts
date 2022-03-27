import { Controller, UseInterceptors } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { ExtractInterceptor } from 'src/abstract/crud/ExtractInterceptor';
import { FoodOrder } from 'src/entities/food-order.entity';
import { OrderService } from './order.service.';

@UseInterceptors(ExtractInterceptor)
@Controller('order')
export class OrderController extends AbstractController<FoodOrder> {

  constructor(service: OrderService) {
    super(service);
  }
}
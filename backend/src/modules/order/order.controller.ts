import { Controller, UseInterceptors } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { ExtractInterceptor } from 'src/abstract/crud/ExtractInterceptor';
import { Order } from 'src/entities/order.entity';
import { OrderService } from './order.service.';

@UseInterceptors(ExtractInterceptor)
@Controller('order')
export class OrderController extends AbstractController<Order> {

  constructor(service: OrderService) {
    super(service);
  }
}
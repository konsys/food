import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { ExtractInterceptor } from 'src/abstract/crud/ExtractInterceptor';
import { EOrderStatus, FoodOrder } from 'src/entities/food-order.entity';
import { DeepPartial } from 'typeorm';
import { OrderService } from './order.service.';

@UseInterceptors(ExtractInterceptor)
@Controller('order')
export class OrderController extends AbstractController<FoodOrder> {

  private orderService: OrderService;
  constructor(service: OrderService) {
    super(service);
    this.orderService = service;
  }

  @Post()
  async generateCode(@Body() item: DeepPartial<FoodOrder>) {
    if (item.date && item.price && item.uuid) {

      const res = await this.orderService.findOne(item.uuid);

      if (res) {
        return this.orderService.update({ ...res, date: item.date });
      }

      return this.orderService.create({ ...res, status: EOrderStatus.CREATED });
    }
    return false
  }
}
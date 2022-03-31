import { BadRequestException, Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { ExtractInterceptor } from 'src/abstract/crud/ExtractInterceptor';
import { EOrderStatus, FoodOrder } from 'src/entities/food-order.entity';
import { DeepPartial } from 'typeorm';
import { OrderService } from './order.service.';
import { OrderDto } from './types';

@UseInterceptors(ExtractInterceptor)
@Controller('order')
export class OrderController extends AbstractController<FoodOrder> {

  private orderService: OrderService;
  constructor(service: OrderService) {
    super(service);
    this.orderService = service;
  }

  @Post()
  async generateCode(@Body() item: DeepPartial<OrderDto>) {
    if (item.date && item.price && item.uuid) {
      const order: Partial<FoodOrder> = {};

      const cart = await this.orderService.getCartByUuid(item.uuid);

      if (cart) {
        order.order = cart.order;
        order.price = cart.orderSum;
        order.description = item.description;
        order.restaurantUuid = cart.restaurantUuid;
        order.places = item.places;
        order.phone = item.phone;
        order.uuid = cart.uuid;
        // order.date = item.date;
        order.time = item.time;
      } else {
        throw new BadRequestException('Заказ не найден');
      }

      if (item.promoCodeUuid) {
        const promo = await this.orderService.getPromoByUuid(item.promoCodeUuid);
        order.promoCodeUuid = promo.uuid;
        order.percentDiscount = promo.percentDiscount;
      }

      console.log(1111111, cart);



      return this.orderService.create(order);
    }
    return false
  }
}
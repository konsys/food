import { Body, Controller, HttpException, HttpStatus, Post, UseInterceptors } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { ExtractInterceptor } from 'src/abstract/crud/ExtractInterceptor';
import { uuid } from 'src/common/random';
import { FoodOrder } from 'src/entities/food-order.entity';
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
  async generateCode(@Body() item: Partial<OrderDto>) {
    try {
      if (item.orderDate && item.price && item.uuid) {

        const order: Partial<FoodOrder> = {};

        const cart = await this.orderService.getCartByUuid(item.uuid);

        if (cart) {
          order.order = cart.order;
          order.priceWithoutDiscount = cart.orderSum;
          order.description = item.description;
          order.restaurantUuid = cart.restaurantUuid;
          order.places = item.places;
          order.phone = item.phone;
          order.uuid = uuid();
          order.userUuid = cart.uuid;
          order.date = item.orderDate;
          order.time = item.time;
        } else {
          throw new HttpException('Заказ не найден. Попробуйте заказать снова', HttpStatus.NOT_FOUND);
        }

        if (item.promoCodeUuid) {
          const promo = await this.orderService.getPromoByUuid(item.promoCodeUuid);
          order.promoCodeUuid = promo.uuid;
          order.percentDiscount = promo.percentDiscount;
          order.priceWithDiscount = cart.orderSum - cart.orderSum / 100 * promo.percentDiscount;
        }

        const resultOrder = await this.orderService.create(order);
        await this.orderService.deleteCartByUuid(cart.uuid);
        return resultOrder;
      }
      throw new HttpException('Неизвестная ошибка. Попробуйте повторить заказ позже', HttpStatus.I_AM_A_TEAPOT);
    } catch (e) {
      throw new HttpException('Неизвестная ошибка. Попробуйте повторить заказ позже', HttpStatus.I_AM_A_TEAPOT);
    }
  }
}

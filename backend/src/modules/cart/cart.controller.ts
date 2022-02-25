import { Body, Controller, Post } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { Cart } from 'src/entities/cart.entity';
import { CartService } from './cart.service';


@Controller('cart')
export class CartController extends AbstractController<Cart> {
  constructor(service: CartService) {
    super(service);
  }

  @Post('add-to-cart')
  create(@Body() item: Cart) {
    return this.service.create(item);
  }
}
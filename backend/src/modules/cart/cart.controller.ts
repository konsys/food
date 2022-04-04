import { Body, Controller } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { Cart } from 'src/entities/cart.entity';
import { CartService } from './cart.service';


@Controller('cart')
export class CartController extends AbstractController<Cart> {
  constructor(service: CartService) {
    super(service);
  }
} 
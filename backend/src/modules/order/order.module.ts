import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/entities/cart.entity';
import { FoodOrder } from 'src/entities/food-order.entity';
import { Promo } from 'src/entities/promo.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service.';

@Module({
  imports: [TypeOrmModule.forFeature([FoodOrder]), TypeOrmModule.forFeature([Cart]), TypeOrmModule.forFeature([Promo])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule { }

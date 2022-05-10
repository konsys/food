import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/entities/cart.entity';
import { CodeCheck } from 'src/entities/code-check.entity';
import { Order } from 'src/entities/order.entity';
import { Promo } from 'src/entities/promo.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service.';

@Module({
  imports: [TypeOrmModule.forFeature([Order]),
  TypeOrmModule.forFeature([Cart]),
  TypeOrmModule.forFeature([Promo]),
  TypeOrmModule.forFeature([CodeCheck])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule { }

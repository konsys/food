import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodOrder } from 'src/entities/food-order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service.';

@Module({
  imports: [TypeOrmModule.forFeature([FoodOrder])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule { }

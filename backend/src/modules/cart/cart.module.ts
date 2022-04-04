import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/entities/cart.entity';
import { Restaurant } from 'src/entities/restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart]), TypeOrmModule.forFeature([Restaurant])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule { }


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantMenu } from 'src/entities/restaraunt-menu.entity';
import { RestaurantMenuController } from './restaurant-menu.controller';
import { RestaurantMenuService } from './restaurant-menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantMenu])],
  controllers: [RestaurantMenuController],
  providers: [RestaurantMenuService]
})
export class RestarauntMenuModule {}

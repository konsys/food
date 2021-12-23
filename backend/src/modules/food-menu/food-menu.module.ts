import { Module } from '@nestjs/common';
import { FoodMenuService } from './food-menu.service';
import { FoodMenuController } from './food-menu.controller';import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodMenuEntity } from 'src/entities/foodmenu.entity';

@Module({ 
  imports:[TypeOrmModule.forFeature([FoodMenuEntity])],
  controllers: [FoodMenuController],
  providers: [FoodMenuService]
})
export class FoodMenuModule {}

import { FoodCategory } from 'src/entities/food-category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodCategoryController } from './food-category.controller';
import { FoodCategoryService } from './food-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodCategory])],
  controllers: [FoodCategoryController],
  providers: [FoodCategoryService]
})
export class FoodCategoryModule {}

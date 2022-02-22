
import { Controller,} from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { FoodCategory } from 'src/entities/food-category.entity';
import { FoodCategoryService } from './food-category.service';

@Controller('food-category')
export class FoodCategoryController extends AbstractController<FoodCategory> {
  constructor(service: FoodCategoryService) {
    super(service)
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { FoodCategory } from 'src/entities/food-category.entity';
import { Repository } from 'typeorm';
@Injectable()
export class FoodCategoryService extends AbstractService<FoodCategory> {

  constructor(@InjectRepository(FoodCategory)
  repository: Repository<FoodCategory>
  ) {
    super(repository);
  }
}
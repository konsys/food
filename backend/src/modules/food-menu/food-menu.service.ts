import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FoodMenuEntity } from 'src/entities/food-menu.entity';
import { Repository } from 'typeorm';
import { CreateFoodMenuDto } from './dto/create-food-menu.dto';
import { UpdateFoodMenuDto } from './dto/update-food-menu.dto';

@Injectable()
export class FoodMenuService {
  constructor(@InjectRepository(FoodMenuEntity)
  private readonly foodMenu: Repository<FoodMenuEntity>
) {}

  create(createFoodMenuDto: CreateFoodMenuDto) {
    console.log(111111111, createFoodMenuDto)
    return this.foodMenu.save(createFoodMenuDto);
  }

  findAll() {
    return this.foodMenu.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} foodMenu`;
  }

  update(id: number, updateFoodMenuDto: UpdateFoodMenuDto) {
    return `This action updates a #${id} foodMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodMenu`;
  }
}

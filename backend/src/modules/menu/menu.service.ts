import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/entities/menu.entity';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-food-menu.dto';
import { UpdateMenuDto } from './dto/update-food-menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectRepository(MenuEntity)
  private readonly foodMenu: Repository<MenuEntity>
) {}

  create(createMenuDto: CreateMenuDto) {
    console.log(111111111, createMenuDto)
    return this.foodMenu.save(createMenuDto);
  }

  findAll() {
    return this.foodMenu.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} foodMenu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} foodMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodMenu`;
  }
}

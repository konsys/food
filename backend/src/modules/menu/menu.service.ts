import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/entities/menu.entity';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectRepository(MenuEntity)
  private readonly menu: Repository<MenuEntity>
) {}

  async create(createMenuDto: CreateMenuDto) {
    return await this.menu.save(createMenuDto);
  }

  async findAll() {
    return await this.menu.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} foodMenu`;
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} foodMenu`;
  }

  async remove(id: number) {
    return `This action removes a #${id} foodMenu`;
  }
}

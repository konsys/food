import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/entities/menu.entity';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectRepository(MenuEntity)
  private readonly repository: Repository<MenuEntity>
) {}

  async create(createMenuDto: CreateMenuDto) {
    return await this.repository.save(createMenuDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(menuId: number) {
    return await this.repository.findOne(menuId);
  }

  async update(updateMenuDto: UpdateMenuDto) {    
    return await this.repository.save( updateMenuDto);
  }

  async remove(menuId: number) {
    return await this.repository.delete({menuId});
  }
}

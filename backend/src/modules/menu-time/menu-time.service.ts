import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuTimeEntity } from 'src/entities/menu-time.entity';
import { Repository } from 'typeorm';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';

@Injectable()
export class MenuTimeService {
  constructor(@InjectRepository(MenuTimeEntity)
  private readonly repository: Repository<MenuTimeEntity>
) {}

  async create(createMenuTimeDto: CreateMenuTimeDto) {
    return await this.repository.save(createMenuTimeDto)
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(menuTimeId: number) {
    return await this.repository.findOne(menuTimeId);
  }

  async update(updateMenuTimeDto: UpdateMenuTimeDto) {
    return await this.repository.save(updateMenuTimeDto);
  }

  async remove(menuTimeId: number) {
    console.log(11111111111, menuTimeId);
    return await this.repository.delete({menuTimeId});
  }
}

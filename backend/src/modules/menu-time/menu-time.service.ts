import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TItemsWithPagination } from 'src/common/types/paginationTypes';
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
    return await this.repository.create(createMenuTimeDto)
  }

  async findAll():Promise<TItemsWithPagination<MenuTimeEntity>> {
    const items = await this.repository.find();
    return {
      items,
      limit:0,
      page:1,
      totalRecords:0
    }
  }

  async findOne(menuTimeId: number) {
    return await this.repository.findOne(menuTimeId);
  }

  async update(updateMenuTimeDto: UpdateMenuTimeDto) {    
    return await this.repository.save( updateMenuTimeDto);
  }

  async remove(menuTimeId: number) {
    return await this.repository.delete({menuTimeId});
  }
}

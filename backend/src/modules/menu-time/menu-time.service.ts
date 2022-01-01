import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TItemsRequestParams, TItemsWithPagination } from 'src/common/types/paginationTypes';
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

  async findAll({limit, page}: TItemsRequestParams):Promise<TItemsWithPagination<MenuTimeEntity>> {
    page = page > 0 ? page : 1;
    const take = limit || 10;
    const skip = take * page;
    const items = await this.repository.find({take,skip});
    return {
      items,
      limit,
      page,
      totalRecords:items.length
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

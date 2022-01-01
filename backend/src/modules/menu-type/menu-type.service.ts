import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TItemsRequestParams, TItemsWithPagination } from 'src/common/types/paginationTypes';
import { MenuTypeEntity } from 'src/entities/menu-type.entity';
import { Repository } from 'typeorm';
import { CreateMenuTypeDto } from './dto/create-menu-type.dto';
import { UpdateMenuTypeDto } from './dto/update-menu-type.dto';

@Injectable()
export class MenuTypeService {
  constructor(@InjectRepository(MenuTypeEntity)
  private readonly repository: Repository<MenuTypeEntity>
) {}

  async create(createMenuTypeDto: CreateMenuTypeDto) {
    return await this.repository.save(createMenuTypeDto)
  }

  async findAll({limit, page}: TItemsRequestParams):Promise<TItemsWithPagination<MenuTypeEntity>> {
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

  async findOne(menuTypeId: number) {
    return await this.repository.findOne(menuTypeId);
  }

  async update(updateMenuTypeDto: UpdateMenuTypeDto) {
    return await this.repository.save(updateMenuTypeDto);
  }

  async remove(menuTypeId: number) {
    return await this.repository.delete({menuTypeId});
  }
}

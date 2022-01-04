import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TListRequest, TListResponce } from 'src/common/types/paginationTypes';
import { MenuTypeEntity } from 'src/entities/menu-type.entity';
import { DeleteResult, FindManyOptions, Repository } from 'typeorm';
import { CreateMenuTypeDto } from './dto/create-menu-type.dto';
import { UpdateMenuTypeDto } from './dto/update-menu-type.dto';

@Injectable()
export class MenuTypeService {
  constructor(@InjectRepository(MenuTypeEntity)
  private readonly repository: Repository<MenuTypeEntity>
  ) { }

  async create(createMenuTypeDto: CreateMenuTypeDto) {
    return this.repository.save(createMenuTypeDto)
  }

  async findAll({ limit, page, filter }: TListRequest<MenuTypeEntity>): Promise<TListResponce<MenuTypeEntity>> {
    page = +(page > 0 ? page : 1);
    const take = limit = +limit;
    const skip = take * page;
    const totalRecords = await this.repository.count(filter);
    const allFilters: FindManyOptions = {
      take: limit,
      skip,
      order: { menuTypeId: "ASC" },
    }
    if (filter) {
      allFilters.where = filter;
    }
    const items = await this.repository.find(allFilters);
    return {
      items,
      limit,
      page,
      totalRecords
    }
  }

  findOne(menuTypeId: number) {
    return this.repository.findOne(menuTypeId);
  }

  update(updateMenuTypeDto: UpdateMenuTypeDto) {
    return this.repository.save(updateMenuTypeDto);
  }

  remove(menuTypeId: number): Promise<DeleteResult> {
    return this.repository.delete({ menuTypeId });
  }
}

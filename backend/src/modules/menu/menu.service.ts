import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TListRequest, TListResponce } from 'src/common/types/paginationTypes';
import { MenuEntity } from 'src/entities/menu.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectRepository(MenuEntity)
  private readonly repository: Repository<MenuEntity>
  ) { }

  create(createMenuDto: CreateMenuDto) {
    return this.repository.save(createMenuDto);
  }

  async findAll({ limit, page, filter }: TListRequest<MenuEntity>): Promise<TListResponce<MenuEntity>> {
    page = page > 0 ? page : 1;
    const take = limit || 10;
    const skip = take * page;
    const totalRecords = await this.repository.count(filter);
    const allFilters: FindManyOptions = {
      take,
      skip,
      order: { menuId: "ASC" },
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

  findOne(menuId: number) {
    return this.repository.findOne(menuId);
  }

  async update(updateMenuDto: UpdateMenuDto) {
    return this.repository.save(updateMenuDto);
  }

  remove(menuId: number) {
    return this.repository.delete({ menuId });
  }
}

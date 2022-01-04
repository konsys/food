import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TListRequest, TListResponce } from 'src/common/types/paginationTypes';
import { MenuTimeEntity } from 'src/entities/menu-time.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';

@Injectable()
export class MenuTimeService {
  constructor(@InjectRepository(MenuTimeEntity)
  private readonly repository: Repository<MenuTimeEntity>
  ) { }

  create(createMenuTimeDto: CreateMenuTimeDto) {
    return this.repository.save(createMenuTimeDto)
  }

  async findAll({ limit, page, filter }: TListRequest<MenuTimeEntity>): Promise<TListResponce<MenuTimeEntity>> {
    page = page > 0 ? page : 1;
    const take = limit || 10;
    const skip = take * page;
    const totalRecords = await this.repository.count(filter);
    const allFilters: FindManyOptions = {
      take,
      skip,
      order: { menuTimeId: "ASC" },
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

  findOne(menuTimeId: number) {
    return this.repository.findOne(menuTimeId);
  }

  update(updateMenuTimeDto: UpdateMenuTimeDto) {
    return this.repository.save(updateMenuTimeDto);
  }

  remove(menuTimeId: number) {
    return this.repository.delete({ menuTimeId });
  }
}

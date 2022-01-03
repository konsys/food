import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TListRequest, TListResponce } from 'src/common/types/paginationTypes';
import { MenuEntity } from 'src/entities/menu.entity';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectRepository(MenuEntity)
  private readonly repository: Repository<MenuEntity>
  ) { }

  async create(createMenuDto: CreateMenuDto) {
    const res = await this.repository.save(createMenuDto);
    // console.log(111111111111, createMenuDto);
    // console.log(222222222222, res);
    return res;
  }

  async findAll({ limit, page }: TListRequest<MenuEntity>): Promise<TListResponce<MenuEntity>> {
    page = page > 0 ? page : 1;
    const take = limit || 10;
    const skip = take * page;
    const items = await this.repository.find({ take, skip, order: { menuId: "ASC" } });
    return {
      items,
      limit,
      page,
      totalRecords: items.length
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

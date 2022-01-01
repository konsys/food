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
) {}

  async create(createMenuDto: CreateMenuDto) {
    return await this.repository.save(createMenuDto);
  }

  async findAll({limit, page}: TListRequest<MenuEntity>):Promise<TListResponce<MenuEntity>> {
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

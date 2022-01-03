import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TListRequest, TListResponce } from 'src/common/types/paginationTypes';
import { MenuTimeEntity } from 'src/entities/menu-time.entity';
import { Repository } from 'typeorm';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';

@Injectable()
export class MenuTimeService {
  constructor(@InjectRepository(MenuTimeEntity)
  private readonly repository: Repository<MenuTimeEntity>
) {}

   create(createMenuTimeDto: CreateMenuTimeDto) {
    console.log(1111111, createMenuTimeDto)
    return this.repository.create(createMenuTimeDto)
  }

  async findAll({limit, page}: TListRequest<MenuTimeEntity>):Promise<TListResponce<MenuTimeEntity>> {
    page = page > 0 ? page : 1;
    const take = limit || 10;
    const skip = take * page;
    const items = await this.repository.find({take, skip, order:{menuTimeId: "ASC"}});
    return {
      items,
      limit,
      page,
      totalRecords:items.length
    }
  }

  findOne(menuTimeId: number) {
    return  this.repository.findOne(menuTimeId);
  }

  update(updateMenuTimeDto: UpdateMenuTimeDto) {    
    return this.repository.save( updateMenuTimeDto);
  }

  remove(menuTimeId: number) {
    return this.repository.delete({menuTimeId});
  }
}

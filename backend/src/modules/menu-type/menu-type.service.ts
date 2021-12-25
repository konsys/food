import { Injectable } from '@nestjs/common';
import { CreateMenuTypeDto } from './dto/create-menu-type.dto';
import { UpdateMenuTypeDto } from './dto/update-menu-type.dto';

@Injectable()
export class MenuTypeService {
  create(createMenuTypeDto: CreateMenuTypeDto) {
    return 'This action adds a new menuType';
  }

  findAll() {
    return `This action returns all menuType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuType`;
  }

  update(id: number, updateMenuTypeDto: UpdateMenuTypeDto) {
    return `This action updates a #${id} menuType`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuType`;
  }
}

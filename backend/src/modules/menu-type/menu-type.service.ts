import { Injectable } from '@nestjs/common';
import { CreateMenuTypeDto } from './dto/create-menu-type.dto';
import { UpdateMenuTypeDto } from './dto/update-menu-type.dto';

@Injectable()
export class MenuTypeService {
  create(createMenuTypeDto: CreateMenuTypeDto) {
    return 'This action adds a new foodType';
  }

  findAll() {
    return `This action returns all foodType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodType`;
  }

  update(id: number, updateMenuTypeDto: UpdateMenuTypeDto) {
    return `This action updates a #${id} foodType`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodType`;
  }
}

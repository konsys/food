import { Injectable } from '@nestjs/common';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';

@Injectable()
export class MenuTimeService {
  create(createMenuTimeDto: CreateMenuTimeDto) {
    console.log(createMenuTimeDto);
    return createMenuTimeDto;
  }

  findAll() {
    return `This action returns all menuTime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuTime`;
  }

  update(id: number, updateMenuTimeDto: UpdateMenuTimeDto) {
    return `This action updates a #${id} menuTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuTime`;
  }
}

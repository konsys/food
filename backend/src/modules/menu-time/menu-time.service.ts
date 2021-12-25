import { Injectable } from '@nestjs/common';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';

@Injectable()
export class MenuTimeService {
  create(createMenuTimeDto: CreateMenuTimeDto) {
    return 'This action adds a new foodTime';
  }

  findAll() {
    return `This action returns all foodTime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodTime`;
  }

  update(id: number, updateMenuTimeDto: UpdateMenuTimeDto) {
    return `This action updates a #${id} foodTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodTime`;
  }
}

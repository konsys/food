import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuTimeEntity } from 'src/entities/menu-time.entity';
import { Repository } from 'typeorm';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';

@Injectable()
export class MenuTimeService {
  constructor(@InjectRepository(MenuTimeEntity)
  private readonly repository: Repository<MenuTimeEntity>
) {}

  async create(createMenuTimeDto: CreateMenuTimeDto) {
    const saved = await this.repository.save(createMenuTimeDto);
    console.log(saved);
    return saved;
  }

   findAll() {
    return  this.repository.find();
  }

  findOne(menuTimeId: number) {
    return this.repository.find({menuTimeId})
  }

  update(menuTimeId: number, updateMenuTimeDto: UpdateMenuTimeDto) {
    return this.repository.update({menuTimeId}, updateMenuTimeDto);
  }

  remove(menuTimeId: number) {
    return this.repository.delete({menuTimeId});
  }
}

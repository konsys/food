import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from 'src/entities/menu.entity';
import { Repository } from 'typeorm';
import { AbstractService } from '../../abstract/crud/abstractService';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService extends AbstractService<Menu, CreateMenuDto, UpdateMenuDto> {

  constructor(@InjectRepository(Menu)
  repository: Repository<Menu>
  ) {
    super(repository);
  }
}

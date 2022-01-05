import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/entities/menu.entity';
import { Repository } from 'typeorm';
import { AbstractService } from '../abstract/abstractService';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService extends AbstractService<MenuEntity, CreateMenuDto, UpdateMenuDto> {

  constructor(@InjectRepository(MenuEntity)
  repository: Repository<MenuEntity>
  ) {
    super(repository);
  }
}

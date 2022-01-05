import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuTypeEntity } from 'src/entities/menu-type.entity';
import { Repository } from 'typeorm';
import { AbstractService } from '../abstract/abstractService';
import { CreateMenuTypeDto } from './dto/create-menu-type.dto';
import { UpdateMenuTypeDto } from './dto/update-menu-type.dto';

@Injectable()
export class MenuTypeService extends AbstractService<MenuTypeEntity, CreateMenuTypeDto, UpdateMenuTypeDto> {
  constructor(@InjectRepository(MenuTypeEntity)
  repository: Repository<MenuTypeEntity>
  ) { super(repository); }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuTypeDict } from 'src/entities/menu-type.dict';
import { Repository } from 'typeorm';
import { AbstractService } from '../abstract/abstractService';
import { CreateMenuTypeDto } from './dto/create-menu-type.dto';
import { UpdateMenuTypeDto } from './dto/update-menu-type.dto';

@Injectable()
export class MenuTypeService extends AbstractService<MenuTypeDict, CreateMenuTypeDto, UpdateMenuTypeDto> {
  constructor(@InjectRepository(MenuTypeDict)
  repository: Repository<MenuTypeDict>
  ) { super(repository); }
}

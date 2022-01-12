import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuTimeDict } from 'src/entities/menu-time.dict';
import { Repository } from 'typeorm';
import { AbstractService } from '../abstract/abstractService';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';

@Injectable()
export class MenuTimeService extends AbstractService<MenuTimeDict, CreateMenuTimeDto, UpdateMenuTimeDto> {
  constructor(@InjectRepository(MenuTimeDict)
  repository: Repository<MenuTimeDict>
  ) { super(repository); }
}

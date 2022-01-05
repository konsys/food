import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuTimeEntity } from 'src/entities/menu-time.entity';
import { Repository } from 'typeorm';
import { AbstractService } from '../abstract/abstractService';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';

@Injectable()
export class MenuTimeService extends AbstractService<MenuTimeEntity, CreateMenuTimeDto, UpdateMenuTimeDto> {
  constructor(@InjectRepository(MenuTimeEntity)
  repository: Repository<MenuTimeEntity>
  ) { super(repository); }
}

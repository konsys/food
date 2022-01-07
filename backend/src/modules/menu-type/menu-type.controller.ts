import { Controller } from '@nestjs/common';
import { MenuTypeService } from './menu-type.service';
import { CreateMenuTypeDto } from './dto/create-menu-type.dto';
import { UpdateMenuTypeDto } from './dto/update-menu-type.dto';
import { MenuTypeEntity } from 'src/entities/menu-type.entity';
import { AbstractController } from '../abstract/abstractController';

  @Controller('menu-type')
  export class MenuTypeController extends AbstractController<MenuTypeEntity, CreateMenuTypeDto, UpdateMenuTypeDto> {
    constructor(service: MenuTypeService) {
      super(service)
    }
  }
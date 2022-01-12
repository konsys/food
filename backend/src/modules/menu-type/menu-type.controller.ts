import { Controller } from '@nestjs/common';
import { MenuTypeService } from './menu-type.service';
import { CreateMenuTypeDto } from './dto/create-menu-type.dto';
import { UpdateMenuTypeDto } from './dto/update-menu-type.dto';
import { AbstractController } from '../abstract/abstractController';
import { MenuTypeDict } from 'src/entities/menu-type.';

  @Controller('menu-type')
  export class MenuTypeController extends AbstractController<MenuTypeDict, CreateMenuTypeDto, UpdateMenuTypeDto> {
    constructor(service: MenuTypeService) {
      super(service)
    }
  }
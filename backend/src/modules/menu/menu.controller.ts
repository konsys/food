import { Controller} from '@nestjs/common';
import { MenuEntity } from 'src/entities/menu.entity';
import { AbstractController } from '../abstract/abstractController';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenuService } from './menu.service';

  @Controller('menu')
  export class MenuController extends AbstractController<MenuEntity, CreateMenuDto, UpdateMenuDto> {
    constructor(service: MenuService) {
      super(service)
    }
  }
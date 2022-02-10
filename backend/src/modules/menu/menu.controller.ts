import { Controller} from '@nestjs/common';
import { Menu } from 'src/entities/menu.entity';
import { AbstractController } from '../../abstract/crud/abstractController';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenuService } from './menu.service';

  @Controller('menu')
  export class MenuController extends AbstractController<Menu, CreateMenuDto, UpdateMenuDto> {
    constructor(service: MenuService) {
      super(service)
    }
  }
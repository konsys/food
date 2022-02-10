import { Controller } from '@nestjs/common';
import { MenuTimeService } from './menu-time.service';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';
import { AbstractController } from '../../abstract/crud/abstractController';
import { MenuTimeDict } from 'src/entities/menu-time.dict';

@Controller('menu-time')
export class MenuTimeController extends AbstractController<MenuTimeDict, CreateMenuTimeDto, UpdateMenuTimeDto> {
  constructor(service: MenuTimeService) {
    super(service)
  }
}


import { Restaraunt } from '../../entities/restaraunt.entity';
import { Controller } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { CreateMenuDto } from '../menu/dto/create-menu.dto';
import { UpdateMenuDto } from '../menu/dto/update-menu.dto';
import { RestarauntService } from './restaraunt.service';


@Controller('restaraunts')
export class RestarauntController extends AbstractController<Restaraunt, CreateMenuDto, UpdateMenuDto> {
  constructor(service: RestarauntService) {
    super(service)
  }
}
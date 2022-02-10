import { UpdateRestarauntDto } from './dto/update-restaraunt.dto';
import { CreateRestarauntDto } from './dto/create-restaraunt.dto';

import { Restaraunt } from '../../entities/restaraunt.entity';
import { Controller } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { RestarauntService } from './restaraunt.service';


@Controller('restaraunts')
export class RestarauntController extends AbstractController<Restaraunt, CreateRestarauntDto, UpdateRestarauntDto> {
  constructor(service: RestarauntService) {
    super(service)
  }
}
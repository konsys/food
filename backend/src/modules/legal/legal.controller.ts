import { Controller } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { LegalService } from './legal.service';
import { CreateLegalDto } from './dto/create-legal.dto';
import { UpdateLegalDto } from './dto/update-legal.dto';
import { Legal } from 'src/entities/legalEntity';


@Controller('legal')
export class LegalController extends AbstractController<Legal, CreateLegalDto, UpdateLegalDto> {
  constructor(service: LegalService) {
    super(service)
  }
}
import { Controller } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { LegalService } from './legal.service';
import { Legal } from 'src/entities/legal.entity';


@Controller('legal')
export class LegalController extends AbstractController<Legal> {
  constructor(service: LegalService) {
    super(service)
  }
}
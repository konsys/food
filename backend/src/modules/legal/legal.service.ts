import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { Legal } from 'src/entities/legalEntity';
import { Repository } from 'typeorm';
import { CreateLegalDto } from './dto/create-legal.dto';
import { UpdateLegalDto } from './dto/update-legal.dto';

@Injectable()
export class LegalService extends AbstractService<Legal, CreateLegalDto, UpdateLegalDto> {

  constructor(@InjectRepository(Legal)
  repository: Repository<Legal>
  ) {
    super(repository);
  }
}
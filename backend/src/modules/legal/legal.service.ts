import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { Legal } from 'src/entities/legal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LegalService extends AbstractService<Legal> {

  constructor(@InjectRepository(Legal)
  repository: Repository<Legal>
  ) {
    super(repository);
  }
}
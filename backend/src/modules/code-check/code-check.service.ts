import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { CodeCheck } from 'src/entities/code-check.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CodeCheckService extends AbstractService<CodeCheck> {

  constructor(@InjectRepository(CodeCheck)
  repository: Repository<CodeCheck>
  ) {
    super(repository);
  }
}

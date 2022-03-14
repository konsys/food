import { Controller } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { CodeCheck } from 'src/entities/code-check.entity';
import { CodeCheckService } from './code-check.service';

@Controller('code-check')
export class CodeCheckController extends AbstractController<CodeCheck> {
  constructor(service: CodeCheckService) {
    super(service)
  }
}
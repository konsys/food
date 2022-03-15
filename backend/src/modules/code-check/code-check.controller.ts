import { Body, Controller, Post } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { uuid } from 'src/common/random';
import { CodeCheck } from 'src/entities/code-check.entity';
import { DeepPartial } from 'typeorm';
import { CodeCheckService } from './code-check.service';

@Controller('code-check')
export class CodeCheckController extends AbstractController<CodeCheck> {
  constructor(service: CodeCheckService) {
    super(service)
  }

  @Post()
  generateCode(@Body() item: DeepPartial<CodeCheck>) {
    const code = Math.floor(1000 + Math.random() * 9000);
    return super.create({...item, code, uuid: uuid()});
  }
}
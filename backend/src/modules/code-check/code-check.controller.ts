import { Body, Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { ExtractInterceptor } from 'src/abstract/crud/ExtractInterceptor';
import { uuid } from 'src/common/random';
import { CodeCheck } from 'src/entities/code-check.entity';
import { DeepPartial } from 'typeorm';
import { CodeCheckService } from './code-check.service';

@UseInterceptors(ExtractInterceptor)
@Controller('code-check')
export class CodeCheckController extends AbstractController<CodeCheck> {

  private checkService: CodeCheckService;
  constructor(service: CodeCheckService) {
    super(service);
    this.checkService = service;
  }

  @Post()
  async generateCode(@Body() item: DeepPartial<CodeCheck>) {
    const res = await this.checkService.findOneByFilter({ clientUuid: item.clientUuid });
    if (res) {
      return res;
    }
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    return this.checkService.create({ ...item, code, uuid: uuid() });
  }

  @Get('filter-one')
  async checkCode(@Query() filter: DeepPartial<CodeCheck>) {
    if (filter?.code) {
      const res = await this.checkService.findOneByFilter({ code: filter.code });

      console.log(11111114, res);
      return res;
    }
    return null;


  }
}
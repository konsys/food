import { Body, Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import * as moment from 'moment';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { ExtractInterceptor } from 'src/abstract/crud/ExtractInterceptor';
import { EXPIRE_1_MINUTE } from 'src/common/constants/constants';
import { CodeCheck, ECodeStatus } from 'src/entities/code-check.entity';
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
    let expiredAt = new Date(new Date().getTime() + EXPIRE_1_MINUTE);
    const code = Math.floor(1000 + Math.random() * 9000).toString();

    const res = await this.checkService.findOneByFilter({ uuid: item.uuid, phoneNumber: item.phoneNumber });
    if (res) {
      const isExpired = moment(res.expiredAt).isBefore(new Date());
      if (!isExpired) {
        return res;
      } else {
        expiredAt = new Date(new Date().getTime() + EXPIRE_1_MINUTE);
        return this.checkService.update({ ...item, code, expiredAt });
      }
    }
    return this.checkService.create({ ...item, code, expiredAt });
  }

  @Get('filter-one')
  async checkCode(@Query() filter: DeepPartial<CodeCheck>) {
    if (filter?.code && filter?.uuid) {
      const res = await this.checkService.findOneByFilter(filter);

      if (res) {
        const updated = await this.checkService.update({ ...res, status: ECodeStatus.SMS_SENT });
        return updated;
      }

      return res;
    }
    return false;
  }
}
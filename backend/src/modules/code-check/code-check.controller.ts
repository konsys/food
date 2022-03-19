import { Body, Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import * as moment from 'moment';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { ExtractInterceptor } from 'src/abstract/crud/ExtractInterceptor';
import { DATE_FORMAT, EXPIRE_1_MINUTE } from 'src/common/constants/constants';
import { uuid } from 'src/common/random';
import { getDateWithoutTimeZone } from 'src/common/utils/dateTime';
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
    const res = await this.checkService.findOneByFilter({ clientUuid: item.clientUuid });
    if (res) {
      return res;
    }
    // const dateWithoutTimezone = getDateWithoutTimeZone();
    const dateWithoutTimezone = new Date();
    const expiredAt = moment(dateWithoutTimezone.getTime() + EXPIRE_1_MINUTE).format(DATE_FORMAT)
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    return this.checkService.create({ ...item, code, uuid: uuid(), expiredAt });
  }

  @Get('filter-one')
  async checkCode(@Query() filter: DeepPartial<CodeCheck>) {
    if (filter?.code && filter?.clientUuid && filter?.uuid) {
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
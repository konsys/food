import { Body, Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import * as moment from 'moment';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { ExtractInterceptor } from 'src/abstract/crud/ExtractInterceptor';
import { EXPIRE_1_MINUTE } from 'src/common/constants/constants';
import { addTime } from 'src/common/utils/dateTime';
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
    if (item.phoneNumber && item.uuid) {
      let expiredAt = addTime(EXPIRE_1_MINUTE * 2);
      const code = Math.floor(1000 + Math.random() * 9000).toString();

      const res = await this.checkService.findOne(item.uuid);

      if (res) {
        const isExpired = moment(res.expiredAt).isBefore(new Date());
        if (!isExpired) {
          return res;
        } else {
          await this.checkService.removeItem(item.uuid);
          expiredAt = addTime(EXPIRE_1_MINUTE * 2);
          await this.checkService.update({ ...res, code, expiredAt });
          return this.checkService.findOne(item.uuid);
        }
      }
      await this.checkService.create({ ...item, code, expiredAt });
      return this.checkService.findOne(item.uuid);
    }
    return false
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
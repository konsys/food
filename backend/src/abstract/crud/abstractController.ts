import { DeepPartial } from 'typeorm';
import { Get, Post, Body, Param, Delete, Put, UseInterceptors, Query, HttpException, HttpStatus } from '@nestjs/common';
import { TUuid } from 'src/common/types';

import { TListRequest } from 'src/common/types/paginationTypes';
import { IAbstractService } from './abstractService';
import { ExtractInterceptor } from './ExtractInterceptor';
import { instanceToInstance } from 'class-transformer';

@UseInterceptors(ExtractInterceptor)
export class AbstractController<E> {
  private service: IAbstractService<E>;

  constructor(service: IAbstractService<E>) {
    this.service = service;
  }

  @Post()
  async create(@Body() item: DeepPartial<E>) {
    try {
      return await this.service.create(item);
    } catch (e) {
      console.log(e)
      throw new HttpException(`Unknown error1 ${JSON.stringify(e)}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('filter')
  async filter(@Body() params: TListRequest<E>) {
    try {
      console.log(params)
      return await this.service.findAll(params);
    } catch (e) {
      throw new HttpException(`Unknown error2 ${JSON.stringify(e)}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('filter-one')
  async filterOne(@Query() filter: DeepPartial<E>) {
    try {
      const instance = instanceToInstance<DeepPartial<E>>(filter);
      const res = await this.service.findOneByFilter(instance);
      if (res) {
        return res;
      }
      throw new HttpException('Resource not found', HttpStatus.NOT_FOUND);
    } catch (e) {
      throw new HttpException(`Unknown error3 ${JSON.stringify(e)}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: TUuid) {

    const res = await this.service.findOne(uuid);
    if (res) {
      return res;
    }
    throw new HttpException('Resource not found', HttpStatus.NOT_FOUND);

  }

  @Put()
  async update(@Body() updateMenuTimeDto: DeepPartial<E>) {
    try { return await this.service.update(updateMenuTimeDto) } catch (e) {
      throw new HttpException(`Unknown error5 ${JSON.stringify(e)}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: TUuid) {
    try { return await this.service.removeItem(uuid); } catch (e) {
      throw new HttpException(`Unknown error6 ${JSON.stringify(e)}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

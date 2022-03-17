import { DeepPartial } from 'typeorm';
import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, Query } from '@nestjs/common';
import { TUuid } from 'src/common/types';

import { TListRequest } from 'src/common/types/paginationTypes';
import { IAbstractService } from './abstractService';
import { ExtractInterceptor } from './ExtractInterceptor';
import { instanceToInstance } from 'class-transformer';

@UseInterceptors(ExtractInterceptor)
@Controller('menu-time')
export class AbstractController<E> {
  private service: IAbstractService<E>;

  constructor(service: IAbstractService<E>) { 
      this.service = service;
  }

  @Post()
  create(@Body() item: DeepPartial<E>) {
    return this.service.create(item);
  }

  @Post('filter')
  filter(@Body() params: TListRequest<E>) {
    return (this.service.findAll(params));
  }

  @Get('filter-one')
  filterOne(@Query() filter: any) {
    const instance = instanceToInstance<E>(filter)
    return this.service.findOneByFilter(instance);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: TUuid) {
    return this.service.findOne(uuid);
  }

  @Put()
  update(@Body() updateMenuTimeDto: DeepPartial<E>) {
    return this.service.update(updateMenuTimeDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: TUuid) {
    return this.service.removeItem(uuid);
  }
}

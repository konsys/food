import { DeepPartial } from 'typeorm';
import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors } from '@nestjs/common';
import { TUuid } from 'src/common/types';

import { TListRequest } from 'src/common/types/paginationTypes';
import { IAbstractService } from './abstractService';
import { ExtractInterceptor } from './ExtractInterceptor';

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

  @Get(':uuid')
  findOne(@Param('uuid') uuid: TUuid) {
    return this.service.findOne(uuid);
  }

  @Put()
  update(@Body() updateMenuTimeDto: DeepPartial<E>) {
    return this.service.update(updateMenuTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}

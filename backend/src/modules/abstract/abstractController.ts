import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';

import { TListRequest } from 'src/common/types/paginationTypes';
import { IAbstractService } from './abstractService';
import { ExtractInterceptor } from './ExtractInterceptor';

@UseInterceptors(ExtractInterceptor)
@Controller('menu-time')
export class AbstractController<E, C, U> {
    private service: IAbstractService<E, C, U>;

  constructor(service: IAbstractService<E, C, U>) { 
      this.service = service;
  }

  @Post()
  create(@Body() item: C) {
    return this.service.create(item);
  }

  @Post('filter')
  filter(@Body() params: TListRequest<E>) {
    return (this.service.findAll(params));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put()
  update(@Body() updateMenuTimeDto: U) {
    return this.service.update(updateMenuTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}

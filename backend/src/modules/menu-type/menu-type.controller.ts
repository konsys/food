import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { MenuTypeService } from './menu-type.service';
import { CreateMenuTypeDto } from './dto/create-menu-type.dto';
import { UpdateMenuTypeDto } from './dto/update-menu-type.dto';
import { TItemsRequestParams } from 'src/common/types/paginationTypes';

@Controller('menu-type')
export class MenuTypeController {
  constructor(private readonly service: MenuTypeService) {}

  @Post()
  create(@Body() createMenuTypeDto: CreateMenuTypeDto) {
    return this.service.create(createMenuTypeDto);
  }

  @Get()
  findAll(@Query() params: TItemsRequestParams) {
    return this.service.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put()
  update(@Body() updateMenuTypeDto: UpdateMenuTypeDto) {
    return this.service.update(updateMenuTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}

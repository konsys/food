import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { MenuTimeService } from './menu-time.service';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';
import { MenuTimeEntity } from 'src/entities/menu-time.entity';
import { TListRequest } from 'src/common/types/paginationTypes';

@Controller('menu-time')
export class MenuTimeController {
  constructor(private readonly service: MenuTimeService) {}
  // video63497865/teenmegaworld.net_-_jemma_-brunette_babe_enjoy_orgasm_on_a_bed
  @Post()
  create(@Body() createMenuTimeDto: CreateMenuTimeDto) {
    return this.service.create(createMenuTimeDto);
  }

  @Get()
  findAll(@Query() params: TListRequest<MenuTimeEntity>) {
    return this.service.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put()
  update(@Body() updateMenuTimeDto: UpdateMenuTimeDto) {
    return this.service.update(updateMenuTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}

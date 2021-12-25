import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuTypeService } from './menu-type.service';
import { CreateMenuTypeDto } from './dto/create-menu-type.dto';
import { UpdateMenuTypeDto } from './dto/update-menu-type.dto';

@Controller('food-type')
export class MenuTypeController {
  constructor(private readonly menuTypeService: MenuTypeService) {}

  @Post()
  create(@Body() createMenuTypeDto: CreateMenuTypeDto) {
    return this.menuTypeService.create(createMenuTypeDto);
  }

  @Get()
  findAll() {
    return this.menuTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuTypeDto: UpdateMenuTypeDto) {
    return this.menuTypeService.update(+id, updateMenuTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuTypeService.remove(+id);
  }
}

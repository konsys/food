import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuTypeService } from './menu-type.service';
import { CreateMenuTypeDto } from './dto/create-menu-type.dto';
import { UpdateMenuTypeDto } from './dto/update-menu-type.dto';

@Controller('food-type')
export class MenuTypeController {
  constructor(private readonly foodTypeService: MenuTypeService) {}

  @Post()
  create(@Body() createMenuTypeDto: CreateMenuTypeDto) {
    return this.foodTypeService.create(createMenuTypeDto);
  }

  @Get()
  findAll() {
    return this.foodTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuTypeDto: UpdateMenuTypeDto) {
    return this.foodTypeService.update(+id, updateMenuTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodTypeService.remove(+id);
  }
}

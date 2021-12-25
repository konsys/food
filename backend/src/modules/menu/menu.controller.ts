import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-food-menu.dto';
import { UpdateMenuDto } from './dto/update-food-menu.dto';

@Controller('food-menu')
export class MenuController {
  constructor(private readonly foodMenuService: MenuService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.foodMenuService.create(createMenuDto);
  }

  @Get()
  findAll() {
    return this.foodMenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodMenuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.foodMenuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodMenuService.remove(+id);
  }
}

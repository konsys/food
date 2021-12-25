import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuTimeService } from './menu-time.service';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';

@Controller('food-time')
export class MenuTimeController {
  constructor(private readonly foodTimeService: MenuTimeService) {}

  @Post()
  create(@Body() createMenuTimeDto: CreateMenuTimeDto) {
    return this.foodTimeService.create(createMenuTimeDto);
  }

  @Get()
  findAll() {
    return this.foodTimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodTimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuTimeDto: UpdateMenuTimeDto) {
    return this.foodTimeService.update(+id, updateMenuTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodTimeService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuTimeService } from './menu-time.service';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';

@Controller('menu-time')
export class MenuTimeController {
  constructor(private readonly menuTimeService: MenuTimeService) {}

  @Post()
  create(@Body() createMenuTimeDto: CreateMenuTimeDto) {
    return this.menuTimeService.create(createMenuTimeDto);
  }

  @Get()
  findAll() {
    return  this.menuTimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuTimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuTimeDto: UpdateMenuTimeDto) {
    return this.menuTimeService.update(+id, updateMenuTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuTimeService.remove(+id);
  }
}

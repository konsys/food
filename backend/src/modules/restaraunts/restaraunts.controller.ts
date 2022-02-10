import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestarauntsService } from './restaraunts.service';
import { CreateRestarauntDto } from './dto/create-restaraunt.dto';
import { UpdateRestarauntDto } from './dto/update-restaraunt.dto';

@Controller('restaraunts')
export class RestarauntsController {
  constructor(private readonly restarauntsService: RestarauntsService) {}

  @Post()
  create(@Body() createRestarauntDto: CreateRestarauntDto) {
    return this.restarauntsService.create(createRestarauntDto);
  }

  @Get()
  findAll() {
    return this.restarauntsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restarauntsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestarauntDto: UpdateRestarauntDto) {
    return this.restarauntsService.update(+id, updateRestarauntDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restarauntsService.remove(+id);
  }
}

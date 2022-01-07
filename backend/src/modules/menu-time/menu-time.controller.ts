import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MenuTimeService } from './menu-time.service';
import { CreateMenuTimeDto } from './dto/create-menu-time.dto';
import { UpdateMenuTimeDto } from './dto/update-menu-time.dto';
import { MenuTimeEntity } from 'src/entities/menu-time.entity';
import { AbstractController } from '../abstract/abstractController';

@Controller('menu-time')
export class MenuTimeController extends AbstractController<MenuTimeEntity, CreateMenuTimeDto, UpdateMenuTimeDto> {
  constructor(service: MenuTimeService) {
    super(service)
  }
}

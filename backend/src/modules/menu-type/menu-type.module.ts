import { Module } from '@nestjs/common';
import { MenuTypeService } from './menu-type.service';
import { MenuTypeController } from './menu-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuTypeDict } from 'src/entities/menu-type.';

@Module({
  imports: [TypeOrmModule.forFeature([MenuTypeDict])],
  controllers: [MenuTypeController],
  providers: [MenuTypeService]
})
export class MenuTypeModule { }

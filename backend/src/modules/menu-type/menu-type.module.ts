import { Module } from '@nestjs/common';
import { MenuTypeService } from './menu-type.service';
import { MenuTypeController } from './menu-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuTypeEntity } from 'src/entities/menu-type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MenuTypeEntity])],
  controllers: [MenuTypeController],
  providers: [MenuTypeService]
})
export class MenuTypeModule {}

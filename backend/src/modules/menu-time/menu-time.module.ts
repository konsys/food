import { Module } from '@nestjs/common';
import { MenuTimeService } from './menu-time.service';
import { MenuTimeController } from './menu-time.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuTimeEntity } from 'src/entities/menu-time.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuTimeEntity])],
  controllers: [MenuTimeController],
  providers: [MenuTimeService]
})
export class MenuTimeModule { }

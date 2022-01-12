import { Module } from '@nestjs/common';
import { MenuTimeService } from './menu-time.service';
import { MenuTimeController } from './menu-time.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuTimeDict } from 'src/entities/menu-time.dict';

@Module({
  imports: [TypeOrmModule.forFeature([MenuTimeDict])],
  controllers: [MenuTimeController],
  providers: [MenuTimeService]
})
export class MenuTimeModule { }

import { Module } from '@nestjs/common';
import { MenuTypeService } from './menu-type.service';
import { MenuTypeController } from './menu-type.controller';

@Module({
  controllers: [MenuTypeController],
  providers: [MenuTypeService]
})
export class MenuTypeModule {}

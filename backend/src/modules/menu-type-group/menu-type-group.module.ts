import { Module } from '@nestjs/common';
import { MenuTypeGroupController } from './menu-type-group.controller';
import { MenuTypeGroupService } from './menu-type-group.service';

@Module({
  controllers: [MenuTypeGroupController],
  providers: [MenuTypeGroupService]
})
export class MenuTypeGroupModule {}

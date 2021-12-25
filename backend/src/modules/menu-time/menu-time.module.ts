import { Module } from '@nestjs/common';
import { MenuTimeService } from './menu-time.service';
import { MenuTimeController } from './menu-time.controller';

@Module({
  controllers: [MenuTimeController],
  providers: [MenuTimeService]
})
export class MenuTimeModule {}

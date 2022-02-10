import { Module } from '@nestjs/common';
import { RestarauntsService } from './restaraunts.service';
import { RestarauntsController } from './restaraunts.controller';

@Module({
  controllers: [RestarauntsController],
  providers: [RestarauntsService]
})
export class RestarauntsModule {}

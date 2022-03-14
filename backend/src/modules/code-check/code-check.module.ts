import { Module } from '@nestjs/common';
import { CodeCheckService } from './code-check.service';
import { CodeCheckController } from './code-check.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeCheck } from 'src/entities/code-check.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CodeCheck])],
  controllers: [CodeCheckController],
  providers: [CodeCheckService]
})
export class CodeCheckModule {}
 
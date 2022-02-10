import { Module } from '@nestjs/common';
import { RestarauntService } from './restaraunt.service';
import { RestarauntController } from './restaraunt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaraunt } from 'src/entities/restaraunt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaraunt])],
  controllers: [RestarauntController],
  providers: [RestarauntService]
})
export class RestarauntModule {}

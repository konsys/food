
import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { UpdateRestarauntDto } from './dto/update-restaraunt.dto';
import { Restaraunt } from 'src/entities/restaraunt.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestarauntDto } from './dto/create-restaraunt.dto';


  @Injectable()
  export class RestarauntService extends AbstractService<Restaraunt, CreateRestarauntDto, UpdateRestarauntDto> {
  
    constructor(@InjectRepository(Restaraunt)
    repository: Repository<Restaraunt>
    ) {
      super(repository);
    }
  }
  
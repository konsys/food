import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { Promo } from 'src/entities/promo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromoService extends AbstractService<Promo> {

  constructor(@InjectRepository(Promo)
  repository: Repository<Promo>
  ) {
    super(repository);
  }
}

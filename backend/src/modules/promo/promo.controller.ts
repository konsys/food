import { Controller, UseInterceptors } from '@nestjs/common';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { ExtractInterceptor } from 'src/abstract/crud/ExtractInterceptor';
import { Promo } from 'src/entities/promo.entity';
import { PromoService } from './promo.service';

@UseInterceptors(ExtractInterceptor)
@Controller('promo')
export class PromoController extends AbstractController<Promo> {

  constructor(service: PromoService) {
    super(service);
  }
}
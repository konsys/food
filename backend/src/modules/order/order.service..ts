import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { TUuid } from 'src/common/types';
import { Cart } from 'src/entities/cart.entity';
import { FoodOrder } from 'src/entities/food-order.entity';
import { Promo } from 'src/entities/promo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService extends AbstractService<FoodOrder> {

  private cartRepository: Repository<Cart> = null;
  private promoRepository: Repository<Promo> = null;

  constructor(
    @InjectRepository(FoodOrder)
    repository: Repository<FoodOrder>,
    @InjectRepository(Cart)
    cartRepository: Repository<Cart>,
    @InjectRepository(Promo)
    promoRepository: Repository<Promo>,
  ) {
    super(repository);
    this.cartRepository = cartRepository;
    this.promoRepository = promoRepository;
  }

  getCartByUuid(uuid: TUuid) {
    return this.cartRepository.findOne({ where: { uuid } });
  }

  getPromoByUuid(uuid: TUuid) {
    return this.promoRepository.findOne({ where: { uuid } });
  }

  async deleteCartByUuid(uuid: TUuid) {
    const cart = await this.cartRepository.find({ where: { uuid } });
    return this.cartRepository.remove(cart);
  }

}

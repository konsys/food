import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { TUuid } from 'src/common/types';
import { Cart } from 'src/entities/cart.entity';
import { CodeCheck } from 'src/entities/code-check.entity';
import { Order } from 'src/entities/order.entity';
import { Promo } from 'src/entities/promo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService extends AbstractService<Order> {

  private cartRepository: Repository<Cart> = null;
  private promoRepository: Repository<Promo> = null;
  private codecheckRepository: Repository<CodeCheck> = null;

  constructor(
    @InjectRepository(Order)
    repository: Repository<Order>,
    @InjectRepository(Cart)
    cartRepository: Repository<Cart>,
    @InjectRepository(Promo)
    promoRepository: Repository<Promo>,
    @InjectRepository(CodeCheck)
    codecheckRepository: Repository<CodeCheck>,
  ) {
    super(repository);
    this.cartRepository = cartRepository;
    this.codecheckRepository = codecheckRepository;
    this.promoRepository = promoRepository;
  }

  getCartByUuid(uuid: TUuid) {
    return this.cartRepository.findOne({ where: { uuid } });
  }

  getPromoByUuid(uuid: TUuid) {
    return this.promoRepository.findOne({ where: { uuid } });
  }

  async deleteCartByUuid(uuid: TUuid) {
    const checkCode = await this.codecheckRepository.find({ where: { uuid } });
    this.codecheckRepository.remove(checkCode);
    const cart = await this.cartRepository.find({ where: { uuid } });
    return this.cartRepository.remove(cart);
  }

}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { Cart } from 'src/entities/cart.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CartService extends AbstractService<Cart> {

  constructor(@InjectRepository(Cart)
  repository: Repository<Cart>
  ) {
    super(repository);
  }
}
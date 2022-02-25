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


  async addToCart(cartItem: Cart) {
    let item = await this.repository.findOne({where:{uuid:cartItem.uuid}});
    if(item){
      item = {...item, order: {...item.order, restaurantMenuUuid: cartItem.order.restaurantMenuUuid, quantity: cartItem.order.quantity}}
      return await this.repository.save(item);
    }
    return await this.repository.save(cartItem);
}
}
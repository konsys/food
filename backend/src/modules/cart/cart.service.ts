import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/abstract/crud/abstractService';
import { Cart } from 'src/entities/cart.entity';
import { Restaurant } from 'src/entities/restaurant.entity';
import { DeepPartial, Repository } from 'typeorm';


@Injectable()
export class CartService extends AbstractService<Cart> {

  private cartRepository: Repository<Cart> = null;
  private restaurantRepository: Repository<Restaurant> = null;

  constructor(@InjectRepository(Cart)
  repository: Repository<Cart>,
    @InjectRepository(Restaurant)
    restaurantRepository: Repository<Restaurant>
  ) {
    super(repository);
    this.cartRepository = repository;
    this.restaurantRepository = restaurantRepository;
  }

  async create(entity: DeepPartial<Cart>) {
    const cart = await this.cartRepository.findOne({ where: { uuid: entity.uuid } });
    if (cart && cart.restaurantUuid !== entity.restaurantUuid) {
      const restaurant = await this.restaurantRepository.findOne(cart.uuid);
      throw new BadRequestException({ message: `Вы уже начали создавать заказ в ${restaurant.name}` })
    }
    const res = await this.cartRepository.save(entity);
    return this.cartRepository.findOne({ where: { uuid: res.uuid } });
  }

  async update(entity: DeepPartial<Cart>) {
    const cart = await this.cartRepository.findOne({ where: { uuid: entity.uuid } });
    if (cart && cart.restaurantUuid !== entity.restaurantUuid) {
      const restaurant = await this.restaurantRepository.findOne(cart.uuid);
      throw new BadRequestException({ message: `Вы уже начали создавать заказ в ${restaurant.name}` })
    }
    const newEntity = { ...cart, ...entity }
    const res = await this.cartRepository.save(newEntity);
    return this.cartRepository.findOne({ where: { uuid: res.uuid } });
  }


}
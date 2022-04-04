import { Column, Entity, Generated, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { TRestaurantMenuOrder } from './cart.entity';
import { TUuid } from 'src/common/types';

export enum EOrderStatus { CREATED = 'CREATED', PAID = 'PAID', IN_PROGRESS = 'IN_PROGRESS', CLOSED = 'CLOSED' }


@Entity()
export class FoodOrder {


  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  uuid: TUuid;

  @Index({ fulltext: true })
  @Column()
  userUuid: string;

  @Index({ fulltext: true })
  @Column()
  restaurantUuid: string;

  @Column()
  promoCodeUuid: string;

  @Column({ default: EOrderStatus.CREATED })
  status: EOrderStatus

  @Column({
    type: 'timestamp with time zone',
  })
  date: Date

  @Column()
  percentDiscount: number

  @Column()
  time: string

  @Column()
  phone: string

  @Column({ default: null })
  description?: string

  @Column({ type: 'float' })
  priceWithoutDiscount: number;

  @Column({ type: 'float' })
  priceWithDiscount: number;

  @Column({ default: 1 })
  places: number;

  @Column({
    type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date;

  @Exclude()
  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date;

  @Column({
    type: 'jsonb'
  })
  order: TRestaurantMenuOrder[];
}



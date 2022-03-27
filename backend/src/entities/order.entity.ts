import { AbstractDictionary } from 'src/abstract/crud/abstractDictionary';
import { Column, Entity } from 'typeorm';

@Entity()
export class Order extends AbstractDictionary {


  @Column()
  status: EOrderStatus

  @Column()
  date: Date

  @Column()
  price: number;

  @Column({ default: null })
  amount?: number;
}


export enum EOrderStatus { CREATED = 'CREATED', PAID = 'PAID', IN_PROGRESS = 'IN_PROGRESS', CLOSED = 'CLOSED' }
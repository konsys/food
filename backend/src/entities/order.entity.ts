import { Exclude } from 'class-transformer';
import { AbstractDictionary } from 'src/abstract/crud/abstractDictionary';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

export enum EOrderStatus { CREATED = 'CREATED', PAID = 'PAID', IN_PROGRESS = 'IN_PROGRESS', CLOSED = 'CLOSED' }

@Entity()
export class Order extends AbstractDictionary {

  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true, fulltext: true })
  @Column()
  uuid: string;

  @Column({ default: EOrderStatus.CREATED })
  status: EOrderStatus

  @Column()
  date: Date

  @Column()
  price: number;

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
}



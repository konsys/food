
import { TUuid } from "src/common/types";
import { Column, Entity, Index, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { TRestaurantMenuOrder } from "./order.enrity";

@Entity()
export class Cart {


  @PrimaryColumn()
  @Index({ unique: true, fulltext: true })
  uuid: TUuid;

  @Column()
  restaurantUuid: TUuid;

  @Column({ default: null })
  description: string;


  @Column({
    type: 'jsonb'
  })
  order: TRestaurantMenuOrder[];

  @Column({
    type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column()
  status: EOrderStatus;

  @Column()
  orderSum: number
}


export enum EOrderStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  PAID = 'PAID'
}
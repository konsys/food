
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TRestaurantMenuOrder } from "./order.enriry";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;



  @Column({ default: null })
  description: string;


  @Column({
    type: 'jsonb'
  })
  order: TRestaurantMenuOrder[];

  @Column({
    type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;


  @Column()
  status: EOrderStatus;
}


export enum EOrderStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  PAID = 'PAID'
}
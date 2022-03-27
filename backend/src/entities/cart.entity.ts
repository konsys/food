
import { TUuid } from "src/common/types";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { RestaurantMenu } from "./restaraunt-menu.entity";
// import { TRestaurantMenuOrder } from "./order.entity";

@Entity()
export class Cart {


  @PrimaryGeneratedColumn()
  id: number;

  @Column()
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

export type TRestaurantMenuOrder = {
  restaurantMenu: RestaurantMenu;
  quantity: number;
  id: number;
};
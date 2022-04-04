
import { TUuid } from "src/common/types";
import { Column, Entity, Generated, Index, PrimaryGeneratedColumn } from "typeorm";
import { EOrderStatus } from "./food-order.entity";
import { RestaurantMenu } from "./restaraunt-menu.entity";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  uuid: number;

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



export type TRestaurantMenuOrder = {
  restaurantMenu: RestaurantMenu;
  quantity: number;
  id: number;
};
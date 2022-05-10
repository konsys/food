
import { TUuid } from "src/common/types";
import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EOrderStatus } from "./order.entity";
import { RestaurantMenu } from "./restaraunt-menu.entity";
import { Restaurant } from "./restaurant.entity";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  uuid: TUuid;

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

  @Column()
  restaurantUuid: TUuid;

  @ManyToOne(() => Restaurant, { eager: true })
  @JoinColumn({ name: "restaurantUuid" })
  restaurant: Restaurant;
}



export type TRestaurantMenuOrder = {
  restaurantMenu: RestaurantMenu;
  quantity: number;
  id: number;
};
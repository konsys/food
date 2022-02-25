import { CartOrder } from "src/common/types/cart";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    orderUuid: string;

    @Column({default: null})
    description: string;

    @Column()
    clientUuid: string;

    @Column({
        type: 'jsonb'
      })
    order: CartOrder;

    @Column({
      type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;


    @Column()
    status: EOrderStatus;
}


export enum EOrderStatus {
  IN_PROGRESS='IN_PROGRESS',
  COMPLETED='COMPLETED',
  PAID='PAID'
}
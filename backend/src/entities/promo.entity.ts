import { Exclude } from "class-transformer";
import { Column, Entity, Generated, Index, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Promo {

    constructor(partial: Partial<Promo>) {
        Object.assign(this, partial);
    }

    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    uuid: number;

    @Exclude()
    @Column()
    code: string;

    @Column({
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column({
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP'
    })
    expiredAt: Date;

    @Column()
    percentDiscount: number
}


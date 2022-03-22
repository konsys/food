import { Exclude } from "class-transformer";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Promo {

    constructor(partial: Partial<Promo>) {
        Object.assign(this, partial);
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index({ unique: true, fulltext: true })
    uuid: string;

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
    percentDIscount: number
}


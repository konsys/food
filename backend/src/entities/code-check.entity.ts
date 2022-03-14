import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CodeCheck {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uuid: string;

    @Column()
    phoneNumber: string;

    @Column()
    code: string;

    @Column({default: null})
    description?: string;


  @Column({
    type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date;
}

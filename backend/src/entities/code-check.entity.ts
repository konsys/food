import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CodeCheck {

  constructor(partial: Partial<CodeCheck>) {
    console.log(234234234, partial)
    Object.assign(this, partial);
  }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uuid: string;

    @Column()
    phoneNumber: string;

    @Exclude()
    @Column()
    code: number;

    @Exclude()
    @Column({default: null})
    description?: string;


  @Column({
    type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date;
}

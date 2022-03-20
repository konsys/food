import { Exclude } from "class-transformer";
import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from "typeorm";


export enum ECodeStatus {
  CREATED = 'CREATED',
  SMS_SENT = 'SMS_SENT',
  SMS_IS_OLD = 'SMS_IS_OUTDATED',
  PHONE_NUMBER_CONFIRMED = 'PHONE_NUMBER_CONFIRMED',
  COMPLETED = 'COMPLETED'
}
@Entity()
export class CodeCheck {

  constructor(partial: Partial<CodeCheck>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true, fulltext: true })
  uuid: string;

  @Exclude()
  @Column()
  phoneNumber: string;

  @Column({ default: ECodeStatus.CREATED })
  status: ECodeStatus;

  @Exclude()
  @Column()
  code: string;

  @Exclude()
  @Column({ default: null })
  description?: string;


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
}


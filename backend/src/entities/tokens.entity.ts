import { TUuid } from 'src/common/types';
import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity()
export class Tokens {

  @Column()
  @PrimaryColumn()
  @Index({ unique: true })
  userUuid: TUuid;

  @Column()
  name: string;

  @Column()
  @Index({ unique: true })
  token: string;

  @Column()
  expires: Date;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: string;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt?: string;
}

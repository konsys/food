import { Exclude } from 'class-transformer';
import { TUuid } from 'src/common/types';
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AbstractDictionary {
  constructor(partial: Partial<AbstractDictionary>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  uuid: TUuid;

  @Column()
  name: string;

  @Column({ default: null })
  description: string;

  @Column({
    type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date;

  @Exclude()
  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date;

}

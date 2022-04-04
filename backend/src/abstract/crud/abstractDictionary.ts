import { Exclude } from 'class-transformer';
import { Column, Entity, Generated, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AbstractDictionary {
  constructor(partial: Partial<AbstractDictionary>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  uuid: string;

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

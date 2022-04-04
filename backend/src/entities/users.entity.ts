import { Column, Entity, Generated, Index, PrimaryGeneratedColumn } from 'typeorm';

import { Exclude } from 'class-transformer';
import { TUuid } from 'src/common/types';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  uuid: TUuid;

  @Column({ default: false })
  vip?: boolean;

  @Exclude()
  @Column({ default: null })
  registrationType?: string;

  @Exclude()
  @Column({ default: null })
  registrationCode: string;

  @Column()
  name: string;

  @Exclude()
  @Column({ default: null })
  lastName?: string;

  @Exclude()
  @Column({ default: null })
  firstName?: string;

  @Exclude()
  @Column({ default: null })
  @Index({ unique: true })
  email?: string;

  @Exclude()
  @Column({ default: false })
  isTestUser: boolean;

  @Exclude()
  @Column({ default: null })
  password?: string;

  @Exclude()
  @Column({ default: null })
  repeatPassword?: string;

  @Column({ default: null })
  team?: string;

  @Column({ default: null })
  avatar?: string;

  @Exclude()
  @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @Exclude()
  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date;

  @Exclude()
  @Column({ default: false })
  isActive?: boolean;

  @Exclude()
  @Column({ default: false })
  isBlocked?: boolean;

  @Exclude()
  @Column({ default: null })
  sex?: number;

  @Exclude()
  @Column({ default: null })
  @Index({ unique: true })
  vkId?: TUuid;

  constructor(partial: Partial<UsersEntity>) {
    Object.assign(this, partial);
  }
}

import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MenuTimeEntity } from './menu-time.entity';
import { MenuTypeEntity } from './menu-type.entity';
@Entity()
export class MenuEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  bigImg: string;

  @Column()
  averageImg: string;

  @Column()
  smallImg: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @Exclude()
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date;

  @ManyToOne(() => MenuTimeEntity, menuTime => menuTime.id)
  menuTime: MenuTimeEntity;

  @ManyToOne(() => MenuTypeEntity, menuType => menuType.id)
  menuType: MenuTypeEntity;

  @Column({ default: false })
  visible: boolean;

  @Column({ default: null })
  price: string;
}

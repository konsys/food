import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MenuTimeDict } from './menu-time.dict';
import { MenuTypeDict } from './menu-type.dict';
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

  @ManyToOne(() => MenuTimeDict, menuTime => menuTime.id, {
    eager: true
  })
  menuTime: MenuTimeDict;

  @ManyToOne(() => MenuTypeDict, menuType => menuType.id, {
    eager: true
  })
  menuType: MenuTypeDict;

  @Column({ default: false })
  visible: boolean;

  @Column({ default: null })
  price: string;
}

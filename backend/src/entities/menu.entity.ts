import { Exclude } from 'class-transformer';
import { AbstractDictionary } from 'src/common/abstractProperties';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MenuTimeDict } from './menu-time.dict';
import { MenuTypeDict } from './menu-type.dict';
@Entity()
export class MenuEntity extends AbstractDictionary {

  @Column({ default: null })
  bigImg: string;

  @Column({ default: null })
  averageImg: string;

  @Column({ default: null })
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

  @ManyToOne(type => MenuTimeDict, {
    eager: true
  })
  @JoinColumn({ name: "timeId" })
  menuTime: MenuTimeDict;

  @ManyToOne(type => MenuTypeDict, {
    eager: true
  })
  @JoinColumn({ name: "typeId" })
  menuType: MenuTypeDict;

  @Column({ default: null })
  price: string;

  @Column({ type: "int", nullable: true })
  timeId: number;

  @Column({ type: "int", nullable: true })
  typeId: number;
}

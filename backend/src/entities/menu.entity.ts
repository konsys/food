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

  @Column({ default: null })
  price: string;

  @Column({ type: "int", nullable: true })
  timeId: number;

  @ManyToOne(() => MenuTimeDict, {eager: true})
  @JoinColumn({ name: "timeId" })
  time: MenuTimeDict;

  @Column({ type: "int", nullable: true })
  typeId: number;

  @ManyToOne(() => MenuTypeDict, {eager: true})
  @JoinColumn({ name: "typeId" })
  type: MenuTypeDict;
}

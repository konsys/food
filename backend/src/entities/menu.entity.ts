import { Exclude } from 'class-transformer';
import { AbstractDictionary } from 'src/modules/abstract/abstractDictionary';
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

  @Column({ default: null })
  price: string;

  @Exclude()
  @Column({ type: 'int', nullable: true })
  timeId: number;

  @ManyToOne(() => MenuTimeDict, {eager: true})
  @JoinColumn({ name: "timeId" })
  time: MenuTimeDict;

  @Exclude()
  @Column({ type: "int", nullable: true })
  typeId: number;

  @ManyToOne(() => MenuTypeDict, {eager: true})
  @JoinColumn({ name: "typeId" })
  type: MenuTypeDict;
}

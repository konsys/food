
import { AbstractDictionary } from 'src/abstract/crud/abstractDictionary';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Images } from './images.entity';
import { MenuTimeDict } from './menu-time.dict';
import { MenuTypeDict } from './menu-type.dict';
@Entity()
export class Menu extends AbstractDictionary {

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  weight: number;

  @Column({ type: 'int', nullable: true })
  timeId: number;

  @ManyToOne(() => MenuTimeDict, {eager: true})
  @JoinColumn({ name: "timeId" })
  time: MenuTimeDict;

  @Column({ type: "int", nullable: true })
  typeId: number;

  @ManyToOne(() => MenuTypeDict, {eager: true})
  @JoinColumn({ name: "typeId" })
  type: MenuTypeDict;

  @Column({ type: "int", nullable: true })
  imgId: number;

  @ManyToOne(() => Images, {eager: true})
  @JoinColumn({ name: "imgId" })
  image: MenuTypeDict;
}

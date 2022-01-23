import { Exclude } from 'class-transformer';
import { AbstractDictionary } from 'src/modules/abstract/abstractDictionary';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MenuTimeDict } from './menu-time.dict';
import { MenuTypeDict } from './menu-type.dict';
import { ImageEntity } from './image.entity';
@Entity()
export class MenuEntity extends AbstractDictionary {

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

  @ManyToOne(() => ImageEntity, {eager: true})
  @JoinColumn({ name: "imgId" })
  image: MenuTypeDict;
}

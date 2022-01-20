import { Exclude } from 'class-transformer';
import { AbstractDictionary } from 'src/modules/abstract/abstractDictionary';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MenuTimeDict } from './menu-time.dict';
import { MenuTypeDict } from './menu-type.dict';
import { ImageEntity } from './image.entity';
@Entity()
export class MenuEntity extends AbstractDictionary {

  @Column({ default: null })
  price: number;

  @Column({ default: null })
  weight: number;

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

  @Exclude()
  @Column({ type: "int", nullable: true })
  imgId: number;

  @ManyToOne(() => ImageEntity, {eager: true})
  @JoinColumn({ name: "imgId" })
  image: MenuTypeDict;
}

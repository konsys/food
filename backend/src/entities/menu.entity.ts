import { Exclude } from 'class-transformer';
import { AbstractDictionary } from 'src/common/abstractProperties';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MenuTimeDict } from './menu-time.dict';
import { MenuTypeDict } from './menu-type.dict';
@Entity()
export class MenuEntity extends AbstractDictionary {

  @Column({default: null})
  bigImg: string;

  @Column({default: null})
  averageImg: string;

  @Column({default: null})
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

  @Column({ default: null })
  price: string;
}

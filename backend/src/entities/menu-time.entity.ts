import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MenuEntity } from './menu.entity';

@Entity()
export class MenuTimeEntity {
    @PrimaryGeneratedColumn()
    menuTimeId: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({default:false})
    visible: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt?: Date;
  
    @Exclude()
    @Column({
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt?: Date;

    @OneToMany(() => MenuEntity, menu=> menu.menuId)
    menus: MenuEntity[];
}

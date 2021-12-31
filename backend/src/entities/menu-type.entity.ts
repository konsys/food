import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MenuEntity } from './menu.entity';

@Entity()
export class MenuTypeEntity {  
    @PrimaryGeneratedColumn()
    menuTypeId: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt?: Date;
  
    @Exclude()
    @Column({
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt?: Date;

    @Column({default:false})
    visible: boolean;

    @OneToMany(() => MenuEntity, menu=> menu.menuId)
    menus: MenuEntity[];
}

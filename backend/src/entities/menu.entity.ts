import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MenuTimeEntity } from './menu-time.entity';
import { MenuTypeEntity } from './menu-type.entity';
@Entity()
export class MenuEntity {
  @PrimaryGeneratedColumn()
    menuId: number;

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

    @ManyToOne(() => MenuTimeEntity, menuTime => menuTime.menuTimeId)
    menuTime: MenuTimeEntity;

    @ManyToOne(() => MenuTypeEntity, menuType => menuType.menuTypeId)
    menuType: MenuTypeEntity;

    @Column({default:false})
    visible: boolean;
}

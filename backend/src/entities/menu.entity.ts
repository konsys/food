import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MenuTime } from './menu-time.entity';
import { MenuType } from './menu-type.entity';
@Entity()
export class MenuEntity {
  @PrimaryGeneratedColumn()
    foodMenuId: number;

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

    @OneToMany(() => MenuTime, menuTime => menuTime.menuTimeId)
    menuTime: MenuTime;

    @OneToMany(() => MenuType, foodType => foodType.foodTypeId)
    foodType: MenuType;

    @Column({default:false})
    visible: boolean;
}

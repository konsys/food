import { AbstractDictionary } from 'src/common/abstractProperties';
import {  Entity, OneToMany } from 'typeorm';
import { MenuEntity } from './menu.entity';

@Entity()
export class MenuTimeDictEntity extends AbstractDictionary {
  @OneToMany(() => MenuEntity, menu => menu.id)
  menus: MenuEntity[];
}

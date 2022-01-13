import { AbstractDictionary } from 'src/modules/abstract/abstractDictionary';
import {  Entity, OneToMany } from 'typeorm';
import { MenuEntity } from './menu.entity';

@Entity()
export class MenuTimeDict extends AbstractDictionary {
  @OneToMany(() => MenuEntity, menu => menu.id)
  menus: MenuEntity[];
}

import { AbstractDictionary } from 'src/abstract/crud/abstractDictionary';
import {  Entity, OneToMany } from 'typeorm';
import { Menu } from './menu.entity';

@Entity()
export class MenuTypeDict extends AbstractDictionary {
  @OneToMany(() => Menu, menu => menu.id)
  menus: Menu[];
}

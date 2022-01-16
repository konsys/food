import { CrudStore } from './common/models/abstractModel/abstractCrudModel';
import { MenuDto } from './pages/Menu/model/types';

export const MenuStore = new CrudStore<MenuDto>('/menu').createCrudStore();
export const MenuTimeStore = new CrudStore<MenuDto>('/menu-time').createCrudStore();
export const MenuTypeStore = new CrudStore<MenuDto>('/menu-type').createCrudStore();

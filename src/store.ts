import { CrudStore } from './common/models/abstractModel/abstractCrudModel';
import { MenuDto } from './pages/Menu/model/types';

export const MenuModel = new CrudStore<MenuDto>('/menu').createCrudStore();
export const MenuTimeModel = new CrudStore<MenuDto>('/menu-time').createCrudStore();
export const MenuTypeModel = new CrudStore<MenuDto>('/menu-type').createCrudStore();

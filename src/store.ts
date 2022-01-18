import { apiUrls } from './common/api/urls';
import { CrudStore } from './common/models/abstractModel/abstractCrudModel';
import { MenuDto } from './pages/Menu/model/types';

export const MenuModel = new CrudStore<MenuDto>(apiUrls.menu.main).createCrudStore();
export const MenuTimeModel = new CrudStore<MenuDto>(apiUrls.menuTime.main).createCrudStore();
export const MenuTypeModel = new CrudStore<MenuDto>(apiUrls.menuType.main).createCrudStore();
export const CreateImageModel = new CrudStore<FormData>(apiUrls.img.main).createCrudStore();

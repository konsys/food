import { apiUrls } from './common/api/urls';
import { CrudStore } from './common/models/abstractModel/abstractCrudModel';
import { ImageDto } from './pages/Image/model/types';
import { MenuDto } from './pages/Menu/model/types';
import { MenuTimeDto } from './pages/MenuTime/menuTimeModel/types';
import { MenuTypeDto } from './pages/MenuType/model/types';

export const MenuModel = new CrudStore<MenuDto>(apiUrls.menu.main).createCrudStore();
export const MenuTimeModel = new CrudStore<MenuTimeDto>(apiUrls.menuTime.main).createCrudStore();
export const MenuTypeModel = new CrudStore<MenuTypeDto>(apiUrls.menuType.main).createCrudStore();
export const ImageModel = new CrudStore<FormData, ImageDto>(apiUrls.img.main).createCrudStore();

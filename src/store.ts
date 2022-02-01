import { apiUrls } from './common/api/urls';
import { CrudStore } from './common/models/abstractModel/abstractCrudModel';
import { DictionaryDto } from './core/dictionary/types';
import { ImageDto } from './pages/Image/model/types';
import { MenuDto } from './pages/Menu/model/types';

export const MenuModel = new CrudStore<MenuDto>(apiUrls.menu.main).createCrudStore();
export const MenuTimeModel = new CrudStore<DictionaryDto>(apiUrls.menuTime.main).createCrudStore();
export const MenuTypeModel = new CrudStore<DictionaryDto>(apiUrls.menuType.main).createCrudStore();
export const ImageModel = new CrudStore<FormData, ImageDto>(apiUrls.img.main).createCrudStore();

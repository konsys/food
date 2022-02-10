import { RestarauntDto } from './modules/RestaruantMenu/types/index';
import { apiUrls } from './common/api/urls';
import { CrudStore } from './common/models/abstractModel/abstractCrudModel';
import { TItemWithId } from './common/types';
import { DictionaryDto } from './core/dictionary/types';
import { ImageDto } from './modules/Image/model/types';
import { MenuDto } from './pages/Menu/model/types';

export const RestarauntModel = new CrudStore<RestarauntDto>(
  apiUrls.restaraunts.main
).createCrudStore();
export const MenuModel = new CrudStore<MenuDto>(apiUrls.menu.main).createCrudStore();
export const MenuTimeModel = new CrudStore<DictionaryDto>(apiUrls.menuTime.main).createCrudStore();
export const MenuTypeModel = new CrudStore<DictionaryDto>(apiUrls.menuType.main).createCrudStore();
export const ImageModel = new CrudStore<TItemWithId<FormData>, ImageDto>(
  apiUrls.img.main
).createCrudStore();

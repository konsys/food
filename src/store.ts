import { TItemWithUuid } from './common/types/index';
import { RestaurantDto } from './modules/restaurants/types';
import { RestarauntMenuDto } from './modules/restaurantMenu/types';
import { apiUrls } from './common/api/urls';
import { CrudStore } from './common/models/abstractModel/abstractCrudModel';
import { ImageDto } from './modules/image/model/types';

export const RestaurantModel = new CrudStore<RestaurantDto>(
  apiUrls.restaurants.main
).createCrudStore();
export const RestaurantMenuModel = new CrudStore<RestarauntMenuDto>(
  apiUrls.restaurantsMenu.main
).createCrudStore();
export const ImageModel = new CrudStore<TItemWithUuid<FormData>, ImageDto>(
  apiUrls.img.main
).createCrudStore();

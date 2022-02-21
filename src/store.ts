import { TItemWithUuid } from './common/types/index';
import { RestaurantDto } from './modules/restaurants/types';
import { RestaurantMenuDto } from './modules/restaurantMenu/types';
import { apiUrls } from './common/api/urls';
import { CrudStore } from './common/models/abstractModel/abstractCrudModel';
import { ImageDto } from './modules/image/model/types';
import { LegalDto } from './modules/legal/types';
import { DeliveryDto } from './modules/delivery/types';

export const RestaurantModel = new CrudStore<RestaurantDto>(
  apiUrls.restaurants.main
).createCrudStore();
export const RestaurantMenuModel = new CrudStore<RestaurantMenuDto>(
  apiUrls.restaurantsMenu.main
).createCrudStore();
export const ImageModel = new CrudStore<TItemWithUuid<FormData>, ImageDto>(
  apiUrls.img.main
).createCrudStore();
export const LegalModel = new CrudStore<LegalDto>(apiUrls.legal.main).createCrudStore();
export const DeliveryModel = new CrudStore<DeliveryDto>(apiUrls.delivery.main).createCrudStore();

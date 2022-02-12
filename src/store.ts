import { RestaurantDto } from './modules/Restaruants/types';
import { apiUrls } from './common/api/urls';
import { CrudStore } from './common/models/abstractModel/abstractCrudModel';
import { TItemWithId } from './common/types';
import { ImageDto } from './modules/Image/model/types';

export const RestaurantModel = new CrudStore<RestaurantDto>(
  apiUrls.restaurants.main
).createCrudStore();
export const ImageModel = new CrudStore<TItemWithId<FormData>, ImageDto>(
  apiUrls.img.main
).createCrudStore();

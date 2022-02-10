import { RestarauntDto } from './modules/Restaruants/types/index';
import { apiUrls } from './common/api/urls';
import { CrudStore } from './common/models/abstractModel/abstractCrudModel';
import { TItemWithId } from './common/types';
import { ImageDto } from './modules/Image/model/types';

export const RestarauntModel = new CrudStore<RestarauntDto>(
  apiUrls.restaraunts.main
).createCrudStore();
export const ImageModel = new CrudStore<TItemWithId<FormData>, ImageDto>(
  apiUrls.img.main
).createCrudStore();

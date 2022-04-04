import * as factory from 'factory.ts';
import faker from 'faker';
import { RestaurantMenuDto } from './types';

export const restaurantMenuFactory = factory.Sync.makeFactory<RestaurantMenuDto>({
  name: factory.each(() => faker.commerce.productName()),
  uuid: factory.each(() => faker.datatype.uuid()),
  description: factory.each(() => faker.commerce.productDescription()),
  price: factory.each(() => faker.datatype.number(500)),
  weight: factory.each(() => faker.datatype.number(300)),
  imageUuid: factory.each(() => faker.datatype.uuid()),
  restaurantUuid: factory.each(() => faker.datatype.uuid()),
  foodCategoryUuid: factory.each(() => faker.datatype.uuid()),

});

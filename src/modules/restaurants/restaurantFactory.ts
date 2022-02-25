import { restaurantMenuFactory } from './../restaurantMenu/restaurantMenuFactory';
import * as factory from 'factory.ts';
import faker from 'faker';
import { RestaurantDto, EFoodType } from './types';

export const restaurantFactory = factory.Sync.makeFactory<RestaurantDto>({
  id: factory.each(() => null),
  name: factory.each(() => faker.commerce.productName()),
  uuid: factory.each(() => faker.datatype.uuid()),
  rating: factory.each(() => 5),
  priceRating: factory.each(() => 1),
  foodType: factory.each(() => EFoodType.EUROPIAN),
  description: factory.each(() => faker.commerce.productDescription()),
  closeTime: factory.each(() => new Date()),
  openTime: factory.each(() => new Date()),
  createdAt: factory.each(() => new Date()),
  updatedAt: factory.each(() => new Date()),
  imageId: factory.each(() => 1),
  legalId: factory.each(() => 1),
  logoId: factory.each(() => 1),
  restaurantMenu: restaurantMenuFactory.buildList(4),
});

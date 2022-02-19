import { legalFactory } from './../legal/legalFactory';
import { imageFactory } from './../image/model/imageFactory';
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
  closeTime: factory.each(() => faker.datatype.datetime()),
  image: factory.each(() => imageFactory.build()),
  logo: factory.each(() => imageFactory.build()),
  menuItems: factory.each(() => []),
  openTime: factory.each(() => faker.datatype.datetime()),
  createdAt: factory.each(() => faker.datatype.datetime()),
  updatedAt: factory.each(() => faker.datatype.datetime()),
  imageId: factory.each(() => 1),
  legalId: factory.each(() => 1),
  legal: factory.each(() => legalFactory.build()),
  logoId: factory.each(() => 1),
});

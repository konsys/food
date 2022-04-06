import * as factory from 'factory.ts';
import faker from 'faker';
import { restaurantMenuFactory } from "../restaurantMenu/restaurantMenuFactory";
import { RestaurantDto, EFoodType } from './types';

export const restaurantFactory = factory.Sync.makeFactory<RestaurantDto>({
  name: factory.each(() => faker.commerce.productName()),
  uuid: factory.each(() => faker.datatype.uuid()),
  rating: factory.each(() => 5),
  priceRating: factory.each(() => 1),
  foodType: factory.each(() => EFoodType.EUROPIAN),
  description: factory.each(() => faker.commerce.productName()),
  closeTime: factory.each(() => new Date()),
  openTime: factory.each(() => new Date()),
  createdAt: factory.each(() => new Date()),
  updatedAt: factory.each(() => new Date()),
  imageUuid: factory.each(() => ''),
  legalUuid: factory.each(() => ''),
  logoUuid: factory.each(() => ''),
  restaurantMenu: restaurantMenuFactory.buildList(1),
  address: factory.each(() => faker.address.city()),
  phone: factory.each(() => faker.phone.phoneNumberFormat()),
});

import { imageFactory } from './../image/model/imageFactory';
import * as factory from 'factory.ts';
import faker from 'faker';
import { RestaurantDto, EFoodType } from './types';
import { DeliveryRangeDto } from '../restaurantMenu/types';
import { legalFactory } from '../legal/legalFactory';

export const restaurantFactory = factory.Sync.makeFactory<RestaurantDto>({
  id: factory.each(() => null),
  name: factory.each(() => faker.commerce.productName()),
  uuid: factory.each(() => faker.datatype.uuid()),
  rating: factory.each(() => 5),
  priceRating: factory.each(() => 1),
  foodType: factory.each(() => EFoodType.EUROPIAN),
  description: factory.each(() => faker.commerce.productDescription()),
  closeTime: factory.each(() => faker.datatype.datetime()),
  deliveryPrice: factory.each(() => faker.datatype.number(600)),
  deliveryRange: factory.each(() => DeliveryRangeDto.LONG),
  image: factory.each(() => imageFactory.build()),
  logo: factory.each(() => imageFactory.build()),
  maxDeliveryMinutes: factory.each(() => faker.datatype.number(60)),
  menuItems: factory.each(() => []),
  openTime: factory.each(() => faker.datatype.datetime()),
  minDeliveryMinutes: factory.each(() => faker.datatype.number(60)),
  legal: factory.each(() => legalFactory.build()),
  legalId: factory.each(() => 1),
  createdAt: factory.each(() => faker.datatype.datetime()),
  updatedAt: factory.each(() => faker.datatype.datetime()),
  imageId: factory.each(() => 1),
});

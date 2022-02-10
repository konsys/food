import { EDeliveryType } from '../types/index';
import * as factory from 'factory.ts';
import faker from 'faker';
import { imageFactory } from '../../Image/model/imageFactory';
import { RestarauntDto, EFoodType } from '../types';

export const restarauntMenuFactory = factory.Sync.makeFactory<RestarauntDto>({
  id: factory.each((n) => n),
  deliveryType: factory.each(() => EDeliveryType.LONG_DISTANCE),
  name: factory.each(() => faker.commerce.productName()),
  uuid: factory.each(() => faker.commerce.productName()),
  img: factory.each(() => imageFactory.build()),
  logoUrl: factory.each(() => faker.commerce.productName()),
  ratingColor: factory.each(() => faker.commerce.productName()),
  rating: factory.each(() => 5),
  priceRate: factory.each(() => 1),
  deliveryFullTime: factory.each(() => faker.commerce.productName()),
  foodType: factory.each(() => EFoodType.EUROPIAN),
  price: factory.each(() => faker.datatype.number(500)),
  description: factory.each(() => faker.commerce.productDescription()),
});

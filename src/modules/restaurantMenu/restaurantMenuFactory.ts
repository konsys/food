import { imageFactory } from './../image/model/imageFactory';
import * as factory from 'factory.ts';
import faker from 'faker';
import { RestarauntMenuDto } from './types';

export const restaurantMenuFactory = factory.Sync.makeFactory<RestarauntMenuDto>({
  id: factory.each(() => null),
  name: factory.each(() => faker.commerce.productName()),
  uuid: factory.each(() => faker.datatype.uuid()),
  description: factory.each(() => faker.commerce.productDescription()),
  price: factory.each(() => faker.datatype.number(500)),
  weight: factory.each(() => faker.datatype.number(300)),
  image: factory.each(() => imageFactory.build()),
});

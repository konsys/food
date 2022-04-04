import * as factory from 'factory.ts';
import faker from 'faker';
import { EOrderStatus } from '../order/types';
import { restaurantMenuFactory } from "../restaurantMenu/restaurantMenuFactory";
import { CartDto } from './types';

export const cartFactory = factory.Sync.makeFactory<CartDto>({
  uuid: factory.each(() => faker.datatype.uuid()),
  restaurantUuid: factory.each(() => faker.datatype.uuid()),
  description: factory.each(() => faker.lorem.words(5)),
  order: factory.each((e) => [
    {
      restaurantMenu: restaurantMenuFactory.build(),
      quantity: faker.datatype.number(5) + 1,
      id: e + 1,
    },
  ]),
  status: factory.each((i) => (i % 2 === 0 ? EOrderStatus.COMPLETED : EOrderStatus.IN_PROGRESS)),
  orderSum: factory.each(() => faker.datatype.number(10000)),
});

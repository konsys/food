import { restaurantMenuFactory } from './../restaurantMenu/restaurantMenuFactory';
import * as factory from 'factory.ts';
import faker from 'faker';
import { CartDto, EOrderStatus } from './types';

export const cartFactory = factory.Sync.makeFactory<CartDto>({
  id: factory.each((n) => null),
  uuid: factory.each(() => faker.datatype.uuid()),
  restaurantUuid: factory.each(() => faker.datatype.uuid()),
  description: factory.each(() => faker.lorem.words(5)),
  order: factory.each((e) => {
    return [
      {
        restaurantMenu: restaurantMenuFactory.build(),
        quantity: faker.datatype.number(5) + 1,
        id: e + 1,
      },
    ];
  }),
  status: factory.each((i) => (i % 2 === 0 ? EOrderStatus.COMPLETED : EOrderStatus.IN_PROGRESS)),
});

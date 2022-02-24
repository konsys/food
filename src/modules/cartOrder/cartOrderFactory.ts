import * as factory from 'factory.ts';
import faker from 'faker';
import { CartOrderDto } from './types';

export const cartOrderFactory = factory.Sync.makeFactory<CartOrderDto>({
  id: factory.each((n) => null),
  uuid: factory.each(() => faker.datatype.uuid()),
  clientUuid: factory.each(() => faker.datatype.uuid()),
  description: factory.each(() => faker.lorem.words(5)),
  order: factory.each(() => {
    return {
      user: faker.datatype.uuid(),
      orderUuid: faker.datatype.uuid(),
      restaurantMenuUuid: faker.datatype.uuid(),
      quantity: faker.datatype.number(5) + 1,
    };
  }),
  createdAt: factory.each(() => new Date()),
});

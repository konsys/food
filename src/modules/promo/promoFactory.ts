import * as factory from 'factory.ts';
import faker from 'faker';
import { PromoDto } from './types';

export const promoFactory = factory.Sync.makeFactory<PromoDto>({
  uuid: factory.each(() => faker.datatype.uuid()),
  code: factory.each(() => faker.datatype.uuid()),
  percentDiscount: factory.each(() => faker.datatype.number(15) + 1),
  createdAt: factory.each(() => faker.date.recent()),
  expiredAt: factory.each(() => faker.date.soon()),
});

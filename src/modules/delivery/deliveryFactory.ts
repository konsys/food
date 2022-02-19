import * as factory from 'factory.ts';
import faker from 'faker';
import { DeliveryDto, EDeliveryType } from './types';

export const deliveryFactory = factory.Sync.makeFactory<DeliveryDto>({
  id: factory.each((n) => null),
  uuid: factory.each(() => faker.datatype.uuid()),
  fullTime: factory.each(() => faker.company.catchPhrase()),
  price: factory.each(() => faker.datatype.number(1000)),
  type: factory.each(() => EDeliveryType.HIGH_DEMAND),
});

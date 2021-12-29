import * as factory from 'factory.ts';
import faker from 'faker';
import { TMenuTime } from './types';

export const menuTimeFactory = factory.Sync.makeFactory<TMenuTime>({
  description: factory.each(() => faker.lorem.text()),
  name: factory.each(() => faker.datatype.uuid()),
  visible: factory.each(() => Math.random() > 0.5),
});

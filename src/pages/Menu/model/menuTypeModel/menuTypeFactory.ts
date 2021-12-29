import * as factory from 'factory.ts';
import faker from 'faker';
import { TMenuType } from './types';

export const menuTypeFactory = factory.Sync.makeFactory<TMenuType>({
  description: factory.each(() => faker.lorem.text()),
  name: factory.each(() => faker.datatype.uuid()),
  visible: factory.each(() => Math.random() > 0.5),
});
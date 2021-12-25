import * as factory from 'factory.ts';
import faker from 'faker';
import { MenuTime } from './types';

export const menuTimeFactory = factory.Sync.makeFactory<MenuTime>({
  description: factory.each(() => faker.lorem.text()),
  name: factory.each(() => faker.commerce.productName()),
  visible: factory.each((i: number) => i % 2 === 0),
});

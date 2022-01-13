import * as factory from 'factory.ts';
import faker from 'faker';
import { MenuTypeDto } from './types';

export const menuTypeFactory = factory.Sync.makeFactory<MenuTypeDto>({
  description: factory.each(() => faker.commerce.productDescription()),
  name: factory.each(() => types[faker.datatype.number(types.length - 1)]),
  visible: factory.each(() => Math.random() > 0.5),
});

const types = ['hot', 'drinks', 'salads'];

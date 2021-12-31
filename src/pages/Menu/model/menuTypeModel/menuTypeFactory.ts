import * as factory from 'factory.ts';
import faker from 'faker';
import { MenuTypeDto } from './types';

export const menuTypeFactory = factory.Sync.makeFactory<MenuTypeDto>({
  description: factory.each(() => faker.datatype.uuid()),
  name: factory.each(() => faker.datatype.uuid()),
  visible: factory.each(() => Math.random() > 0.5),
});

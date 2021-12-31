import * as factory from 'factory.ts';
import faker from 'faker';
import { MenuTimeDto } from './types';

export const menuTimeFactory = factory.Sync.makeFactory<MenuTimeDto>({
  description: factory.each(() => faker.datatype.uuid()),
  name: factory.each(() => faker.datatype.uuid()),
  visible: factory.each(() => Math.random() > 0.5),
});

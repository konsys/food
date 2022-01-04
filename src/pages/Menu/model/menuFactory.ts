import * as factory from 'factory.ts';
import faker from 'faker';
import { menuTimeFactory } from './menuTimeModel/menuTimeFactory';
import { menuTypeFactory } from './menuTypeModel/menuTypeFactory';
import { MenuDto } from './types';

export const menuFactory = factory.Sync.makeFactory<MenuDto>({
  menuTime: factory.each(() => menuTimeFactory.build()),
  menuType: factory.each(() => menuTypeFactory.build()),
  description: factory.each(() => faker.datatype.uuid()),
  name: factory.each(() => faker.datatype.uuid()),
  visible: factory.each(() => Math.random() > 0.5),
  bigImg: factory.each(() => faker.datatype.uuid()),
  averageImg: factory.each(() => faker.datatype.uuid()),
  smallImg: factory.each(() => faker.datatype.uuid()),
  price: factory.each(() => faker.datatype.number(100)),
});

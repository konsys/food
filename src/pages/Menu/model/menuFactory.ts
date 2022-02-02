import * as factory from 'factory.ts';
import faker from 'faker';
import { imageFactory } from '../../Image/model/imageFactory';
import { MenuDto } from './types';

export const menuFactory = factory.Sync.makeFactory<MenuDto>({
  id: factory.each((n) => n),
  timeId: factory.each((n) => n),
  typeId: factory.each((n) => n),
  description: factory.each(() => faker.commerce.productDescription()),
  name: factory.each(() => faker.commerce.productName()),
  visible: factory.each(() => Math.random() > 0.5),
  price: factory.each(() => faker.datatype.number(1000)),
  weight: factory.each(() => faker.datatype.number(2000)),
  imgId: factory.each((n) => n),
  image: factory.each(() => imageFactory.build()),
});

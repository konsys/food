import * as factory from 'factory.ts';
import faker from 'faker';
import { menuTimeFactory } from './menuTimeModel/menuTimeFactory';
import { menuTypeFactory } from './menuTypeModel/menuTypeFactory';
import { MenuDto } from './types';

export const menuFactory = factory.Sync.makeFactory<MenuDto>({
  menuTime: factory.each(() => menuTimeFactory.build()),
  menuType: factory.each(() => menuTypeFactory.build()),
  description: factory.each(() => faker.commerce.productDescription()),
  name: factory.each(() => faker.commerce.productName()),
  visible: factory.each(() => Math.random() > 0.5),
  bigImg: factory.each(() => images[faker.datatype.number(images.length - 1)]),
  averageImg: factory.each(() => images[faker.datatype.number(images.length - 1)]),
  smallImg: factory.each(() => images[faker.datatype.number(images.length - 1)]),
  price: factory.each(() => faker.commerce.price()),
});

const images = [
  '/images/img-01.jpg',
  '/images/img-02.jpg',
  '/images/img-03.jpg',
  '/images/img-04.jpg',
  '/images/img-05.jpg',
  '/images/img-06.jpg',
  '/images/img-07.jpg',
  '/images/img-08.jpg',
  '/images/img-09.jpg',
];

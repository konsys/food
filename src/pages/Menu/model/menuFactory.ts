import * as factory from 'factory.ts';
import faker from 'faker';
import { imageFactory } from '../../Image/model/imageFactory';
import { MenuDto } from './types';

export const menuFactory = factory.Sync.makeFactory<MenuDto>({
  timeId: factory.each((n) => n),
  typeId: factory.each((n) => n),
  description: factory.each(() => faker.commerce.productDescription()),
  name: factory.each(() => faker.commerce.productName()),
  visible: factory.each(() => Math.random() > 0.5),
  price: factory.each(() => faker.commerce.price()),
  imgId: factory.each((n) => n),
  image: factory.each(() => imageFactory.build()),
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

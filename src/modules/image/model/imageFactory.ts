import * as factory from 'factory.ts';
import faker from 'faker';
import { ImageDto } from './types';

export const imageFactory = factory.Sync.makeFactory<ImageDto>({

  description: factory.each(() => faker.commerce.productDescription()),
  name: factory.each(() => faker.commerce.productName()),
  visible: factory.each(() => Math.random() > 0.5),
  largeImg: factory.each(
    () =>
      '/img/food/b43177e0f6e970765bfd8eb4d4e46336.jpg'
  ),
  averageImg: factory.each(
    () =>
      '/img/food/b43177e0f6e970765bfd8eb4d4e46336.jpg'
  ),
  smallImg: factory.each(
    () =>
      '/img/food/b43177e0f6e970765bfd8eb4d4e46336.jpg'
  ),
  destination: factory.each(() => faker.datatype.uuid()),
  encoding: factory.each(() => faker.datatype.uuid()),
  fieldname: factory.each(() => faker.datatype.uuid()),
  filename: factory.each(() => faker.datatype.uuid()),
  path: factory.each(() => faker.datatype.uuid()),
  size: factory.each(() => faker.datatype.number(100000)),
  createdAt: factory.each(() => faker.datatype.datetime()),
  uuid: factory.each(() => faker.datatype.uuid()),
  mimetype: factory.each(() => faker.datatype.uuid()),
  original: factory.each(
    () =>
      '/img/food/b43177e0f6e970765bfd8eb4d4e46336.jpg'
  ),
  originalname: factory.each(() => faker.datatype.uuid()),
  updatedAt: factory.each(() => faker.datatype.datetime()),
});

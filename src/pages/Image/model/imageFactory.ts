import * as factory from 'factory.ts';
import faker from 'faker';
import { ImageDto } from './types';

export const imageFactory = factory.Sync.makeFactory<ImageDto>({
  description: factory.each(() => faker.commerce.productDescription()),
  name: factory.each(() => faker.commerce.productName()),
  visible: factory.each(() => Math.random() > 0.5),
  largeImg: factory.each(() => faker.datatype.uuid()),
  averageImg: factory.each(() => faker.datatype.uuid()),
  smallImg: factory.each(() => faker.datatype.uuid()),
  destination: factory.each(() => faker.datatype.uuid()),
  encoding: factory.each(() => faker.datatype.uuid()),
  fieldname: factory.each(() => faker.datatype.uuid()),
  filename: factory.each(() => faker.datatype.uuid()),
  path: factory.each(() => faker.datatype.uuid()),
  size: factory.each(() => faker.datatype.number(100000)),
  createdAt: factory.each(() => faker.datatype.datetime()),
  id: factory.each((id) => id),
  mimetype: factory.each(() => faker.datatype.uuid()),
  original: factory.each(() => faker.datatype.uuid()),
  originalname: factory.each(() => faker.datatype.uuid()),
  updatedAt: factory.each(() => faker.datatype.datetime()),
});

import * as factory from 'factory.ts';
import faker from 'faker';
import { ImageDto } from './types';

export const imageFactory = factory.Sync.makeFactory<ImageDto>({
  id: factory.each(() => null),
  description: factory.each(() => faker.commerce.productDescription()),
  name: factory.each(() => faker.commerce.productName()),
  visible: factory.each(() => Math.random() > 0.5),
  largeImg: factory.each(
    () =>
      'https://images.broniboy.ru/4UiIg3EIrcJH8PBSJHDEENXZ5eM=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/b5362afa-49d0-4713-a130-f004946d320f/b43177e0f6e970765bfd8eb4d4e46336.jpg'
  ),
  averageImg: factory.each(
    () =>
      'https://images.broniboy.ru/4UiIg3EIrcJH8PBSJHDEENXZ5eM=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/b5362afa-49d0-4713-a130-f004946d320f/b43177e0f6e970765bfd8eb4d4e46336.jpg'
  ),
  smallImg: factory.each(
    () =>
      'https://images.broniboy.ru/4UiIg3EIrcJH8PBSJHDEENXZ5eM=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/b5362afa-49d0-4713-a130-f004946d320f/b43177e0f6e970765bfd8eb4d4e46336.jpg'
  ),
  destination: factory.each(() => faker.datatype.uuid()),
  encoding: factory.each(() => faker.datatype.uuid()),
  fieldname: factory.each(() => faker.datatype.uuid()),
  filename: factory.each(() => faker.datatype.uuid()),
  path: factory.each(() => faker.datatype.uuid()),
  size: factory.each(() => faker.datatype.number(100000)),
  createdAt: factory.each(() => faker.datatype.datetime()),
  uuid: factory.each(() => faker.datatype.uuid()),
  id: factory.each((id) => id),
  mimetype: factory.each(() => faker.datatype.uuid()),
  original: factory.each(
    () =>
      'https://images.broniboy.ru/4UiIg3EIrcJH8PBSJHDEENXZ5eM=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/b5362afa-49d0-4713-a130-f004946d320f/b43177e0f6e970765bfd8eb4d4e46336.jpg'
  ),
  originalname: factory.each(() => faker.datatype.uuid()),
  updatedAt: factory.each(() => faker.datatype.datetime()),
});

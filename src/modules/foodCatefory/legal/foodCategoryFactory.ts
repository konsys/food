import * as factory from 'factory.ts';
import faker from 'faker';
import { FoodCategoryDto } from './types';

export const foodCategoryFactory = factory.Sync.makeFactory<FoodCategoryDto>({
  id: factory.each(() => null),
  name: factory.each(() => faker.commerce.productName()),
  uuid: factory.each(() => faker.datatype.uuid()),
  description: factory.each(() => faker.commerce.productDescription()),
  createdAt: factory.each(() => faker.datatype.datetime()),
  updatedAt: factory.each(() => faker.datatype.datetime()),
});

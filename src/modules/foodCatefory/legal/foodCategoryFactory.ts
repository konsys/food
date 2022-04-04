import * as factory from 'factory.ts';
import faker from 'faker';
import { FoodCategoryDto } from './types';

export const foodCategoryFactory = factory.Sync.makeFactory<FoodCategoryDto>({

  name: factory.each(() => faker.commerce.product()),
  uuid: factory.each(() => faker.datatype.uuid()),
  description: factory.each(() => faker.commerce.productDescription()),
  createdAt: factory.each(() => faker.datatype.datetime()),
  updatedAt: factory.each(() => faker.datatype.datetime()),
});

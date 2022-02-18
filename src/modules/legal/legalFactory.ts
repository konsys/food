import * as factory from 'factory.ts';
import faker from 'faker';
import { LegalDto } from '../restaurants/types';

export const legalFactory = factory.Sync.makeFactory<LegalDto>({
  id: factory.each((n) => n),
  name: factory.each(() => faker.commerce.productName()),
  uuid: factory.each(() => faker.datatype.uuid()),
  description: factory.each(() => faker.commerce.productDescription()),
  adress: factory.each(() => faker.address.cityName()),
  inn: factory.each(() => faker.commerce.productDescription()),
  createdAt: factory.each(() => faker.datatype.datetime()),
  updatedAt: factory.each(() => faker.datatype.datetime()),
  kpp: factory.each(() => faker.finance.bic()),
  ogrn: factory.each(() => faker.finance.accountName()),
});
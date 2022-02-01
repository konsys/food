import * as factory from 'factory.ts';
import faker from 'faker';
import { DictionaryDto } from '../../../core/dictionary/types';

export const menuTypeFactory = factory.Sync.makeFactory<DictionaryDto>({
  description: factory.each(() => faker.commerce.productDescription()),
  name: factory.each(() => types[faker.datatype.number(types.length - 1)]),
  visible: factory.each(() => Math.random() > 0.5),
  id: factory.each((n) => n),
});

const types = ['hot', 'drinks', 'salads'];

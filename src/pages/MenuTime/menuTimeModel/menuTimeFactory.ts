import * as factory from 'factory.ts';
import faker from 'faker';
import { DictionaryDto } from '../../../core/dictionary/types';

export const menuTimeFactory = factory.Sync.makeFactory<DictionaryDto>({
  description: factory.each(() => faker.commerce.productAdjective()),
  name: factory.each(() => faker.commerce.productDescription()),
  visible: factory.each(() => Math.random() > 0.5),
  id: factory.each((n) => n),
});

import * as factory from 'factory.ts';
import faker from 'faker';
import { CodeCheckDto } from './types';

export const codeCheckFactory = factory.Sync.makeFactory<CodeCheckDto>({
  id: factory.each((n) => null),
  uuid: factory.each(() => faker.datatype.uuid()),
  clientUuid: factory.each(() => faker.datatype.uuid()),
  code: factory.each(() => faker.datatype.uuid()),
  phoneNumber: factory.each(() => faker.phone.phoneNumber()),
});

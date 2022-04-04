import * as factory from 'factory.ts';
import faker from 'faker';
import { CodeCheckDto, ESmsCodeStatus } from './types';

export const codeCheckFactory = factory.Sync.makeFactory<CodeCheckDto>({
  uuid: factory.each(() => faker.datatype.uuid()),
  code: factory.each(() => faker.datatype.uuid()),
  phoneNumber: factory.each(() => faker.phone.phoneNumber()),
  status: factory.each(() => ESmsCodeStatus.CREATED),
  expiredAt: factory.each(() => faker.date.future()),
});

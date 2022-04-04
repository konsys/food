import { TUuid } from '../../common/types';

export type DictionaryDto = {
  name: string;
  description: string;
  uuid: TUuid;
  createdAt?: Date;
  updatedAt?: Date;
  visible?: boolean;
};

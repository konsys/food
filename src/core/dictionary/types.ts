import { TId } from '../../common/types';

export type DictionaryDto = {
  id: TId;
  name: string;
  description: string;
  uuid: string;
  createdAt?: Date;
  updatedAt?: Date;
  visible?: boolean;
};

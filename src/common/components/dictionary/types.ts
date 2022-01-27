import { TId } from '../../types';

export type DictionaryDto = {
  id: TId;
  name: string;
  description: string;
  createDate?: Date;
  updateDate?: Date;
};

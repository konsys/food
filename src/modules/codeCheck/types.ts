import { TId, TUuid } from '../../common/types';

export type CodeCheckDto = {
  id: TId;
  uuid: TUuid;
  phoneNumber: string;
  code: string;
  description?: string;
  createdAt?: Date;
};

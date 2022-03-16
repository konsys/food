import { TId, TUuid } from '../../common/types';

export type CodeCheckDto = {
  id: TId;
  uuid: TUuid;
  clientUuid: TUuid;
  phoneNumber: string;
  isSms: boolean;
  code?: string;
  description?: string;
  createdAt?: Date;
};

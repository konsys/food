import { TId, TUuid } from '../../common/types';

export type CodeCheckDto = {
  id: TId;
  uuid: TUuid;
  phoneNumber: string;
  status: ESmsCodeStatus;
  code?: string;
  description?: string;
  createdAt?: Date;
  expiredAt: Date;
};

export enum ESmsCodeStatus {
  CREATED = 'CREATED',
  SMS_SENT = 'SMS_SENT',
  SMS_IS_OLD = 'SMS_IS_OLD',
  COMPLETED = 'COMPLETED'
}
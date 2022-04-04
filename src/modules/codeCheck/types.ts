import { TUuid } from '../../common/types';

export type CodeCheckDto = {

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
  SMS_IS_OLD = 'SMS_IS_OUTDATED',
  PHONE_NUMBER_CONFIRMED = 'PHONE_NUMBER_CONFIRMED',
  COMPLETED = 'COMPLETED'
}
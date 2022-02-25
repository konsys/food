import { TUuid } from '../../common/types';
import { uuid } from '../../common/utils/utils';

export const getSessionUuid = (): TUuid => {
  const session = localStorage.getItem('sessionUuid');
  const uuidValue = uuid();
  if (!session) {
    localStorage.setItem('sessionUuid', uuidValue);
    return uuidValue;
  }
  return session;
};

import { TUuid } from '../../common/types';
import { uuid } from '../../common/utils/utils';

export const getClientUuid = (): TUuid => {
  const session = localStorage.getItem('clientUuid');
  const uuidValue = uuid();
  if (!session) {
    localStorage.setItem('clientUuid', uuidValue);
    return uuidValue;
  }
  return session;
};

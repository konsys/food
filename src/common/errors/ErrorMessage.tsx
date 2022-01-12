import React, { FC } from 'react';
import { instanceOf, isValidateErrorEntity } from '../utils/utils';

interface Props {
  error: unknown;
  message?: string;
}

export const ErrorMessage: FC<Props> = ({ error, message = 'Произошла ошибка' }) => {
  let desc;
  if (isValidateErrorEntity(error)) {
    desc = error.errorFields.map((field) => field.errors.join(','));
  }
  if (hasMessage(error)) {
    desc = [error.message];
  }
  return (
    <div>
      <strong>{message}</strong>
      {desc && (
        <ul>
          {desc.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

function hasMessage<T>(item: T): item is T & { message: string } {
  return instanceOf<TWithMessage>(item, (obj) => typeof obj.message === 'string');
}

type TWithMessage = { message?: string };

import { Button, Form, Input } from 'antd';
import Password from 'antd/lib/input/Password';
import React, { memo } from 'react';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { TVoidFn } from '../../../../common/types';
import { LoginDto } from '../../../../modules/login/types';

interface Props {
  setIsRegistration: TVoidFn<boolean>;
}

const names = columnsNamesGenerator<LoginDto>();

function LoginFields(props: Props) {
  const { setIsRegistration } = props;

  return (
    <>
      <Form.Item
        label="email"
        name={names('email')}
        rules={[{ required: true }]}
        validateFirst
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name={names('password')}
        rules={[{ required: true }]}
      >
        <Password />
      </Form.Item>
      <Form.Item label="uuid" name={names('uuid')} hidden>
        <Input />
      </Form.Item>
      Не зарегистрированы?
      <Button type="link" onClick={() => setIsRegistration(true)}>
        Зарегистрироваться
      </Button>
    </>
  );
}

export default memo(LoginFields);

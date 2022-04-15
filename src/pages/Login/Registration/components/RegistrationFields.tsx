import { Form, Input } from 'antd';
import Password from 'antd/lib/input/Password';
import React, { memo } from 'react';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { RegistrationDto } from '../../../../modules/registration/types';

interface Props {}
const names = columnsNamesGenerator<RegistrationDto>();

function RegistrationFields(props: Props) {
  const {} = props;

  return (
    <>
      <Form.Item
        label="Логин"
        name={names('login')}
        rules={[{ required: true, message: 'Введите логин!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name={names('password')}
        rules={[{ required: true, message: 'Введите пароль!' }]}
      >
        <Password />
      </Form.Item>
      <Form.Item label="uuid" name={names('uuid')} hidden>
        <Input />
      </Form.Item>
    </>
  );
}

export default memo(RegistrationFields);

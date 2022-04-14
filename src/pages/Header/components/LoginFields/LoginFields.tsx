import { Form, Input } from 'antd';
import Password from 'antd/lib/input/Password';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { LoginDto } from '../../../../modules/login/types';

interface Props {}

const names = columnsNamesGenerator<LoginDto>();

function LoginFields(props: Props) {
  const {} = props;

  return (
    <>
      <Form.Item
        label="Логин"
        name={names('login')}
        rules={[{ required: true }]}
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
      Не зарегистрированы? <Link to="/registration">Зарегистрироваться</Link>
    </>
  );
}

export default memo(LoginFields);

import { Button, Col, Form, Input, Row } from 'antd';
import Password from 'antd/lib/input/Password';
import React, { memo } from 'react';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { TVoidFn } from '../../../../common/types';
import { LoginDto } from '../../../../modules/login/types';
import LoginError from './LoginError';

interface Props {
  setIsRegistration: TVoidFn<boolean>;
  loginError: string;
}

const names = columnsNamesGenerator<LoginDto>();

function LoginFields(props: Props) {
  const { setIsRegistration, loginError } = props;

  return (
    <>
      <Form.Item
        label="Телефон"
        name={names('phone')}
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
      <Row>
        <Col span={24} style={{ color: 'red' }}>
          <LoginError error={loginError} />
        </Col>
        <Col span={24}>
          Не зарегистрированы?
          <Button type="link" onClick={() => setIsRegistration(true)}>
            Зарегистрироваться
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default memo(LoginFields);

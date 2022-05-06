import { Form, Input } from 'antd';
import Password from 'antd/lib/input/Password';
import React, { memo } from 'react';
import ReactInputMask from 'react-input-mask';
import { PHONE_FORMAT } from '../../../../common/constants/constants';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { RegistrationDto } from '../../../../modules/registration/types';
import PhoneCheckout from '../../../Checkout/containers/PhoneCheckout/PhoneCheckout';

interface Props {}
const names = columnsNamesGenerator<RegistrationDto>();

function RegistrationFields(props: Props) {
  const {} = props;

  return (
    <>
      <Form.Item
        label="Телефон"
        name={names('phone')}
        rules={[{ required: true, message: 'Введите телефон!' }]}
      >
        <PhoneCheckout />
        <ReactInputMask mask={PHONE_FORMAT} name={names('phone')} />
      </Form.Item>
      <Form.Item
        label="Имя пользователя"
        name={names('name')}
        rules={[{ required: true, message: 'Введите имя!' }]}
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

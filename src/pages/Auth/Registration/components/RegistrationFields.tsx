import { Divider, Form, Input } from 'antd';
import Password from 'antd/lib/input/Password';
import React, { memo, useEffect, useState } from 'react';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { RegistrationDto } from '../../../../modules/registration/types';
import PhoneCheckout from '../../../Checkout/containers/PhoneCheckout/PhoneCheckout';

const names = columnsNamesGenerator<RegistrationDto>();

type Props = {
  registrationFormInstance: any;
};
function RegistrationFields({ registrationFormInstance }: Props) {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  return (
    <>
      <PhoneCheckout setPhoneNumber={setPhoneNumber} />
      <Divider type="horizontal" />
      <Form.Item
        label="Телефон"
        name={names('phone')}
        rules={[{ required: true, message: 'Введите телефон!' }]}
      >
        <Input />
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

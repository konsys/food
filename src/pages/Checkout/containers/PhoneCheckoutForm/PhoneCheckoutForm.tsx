import { Col, Row } from 'antd';
import React, { memo, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import moment from 'moment';
import InputMask from 'react-input-mask';
import { useStore } from 'effector-react';
import CheckoutTimer from '../../components/ChecloutTimer/CheckoutTimer';
import { CodeCheckDto } from '../../../../modules/codeCheck/types';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { getClientUuid } from '../../../../modules/cart/service';
import SendCodeButton from '../../components/SendCodeButton/SendCodeButton';
import { TPromiseFn, TVoidFn } from '../../../../common/types';
import { TItem } from '../../../../common/api/types';
import { $orderStore, updateOrderStore } from '../../../../modules/order/model';

import './phoneCodeCheckoutForm.less';

const dataName = columnsNamesGenerator<CodeCheckDto>();

function phoneValidator(rule: any, value: string) {
  const pattern = /^\+[\d]{1} [(]{1}[\d]{3}[)]{1} [\d]{3}-[\d]{2}-[\d]{2}$/;
  if (!pattern.test(value)) {
    return Promise.reject(new Error('Пожалуйста, введите номер телефона'));
  }
  return Promise.resolve();
}

type Props = {
  code: TItem<CodeCheckDto>;
  setIsPhoneConfirmed: TVoidFn<boolean>;
  isPhoneConfirmed: boolean;
  getCheckoutCode: TPromiseFn<Partial<CodeCheckDto>, Partial<CodeCheckDto>>;
  createCheckoutCode: TPromiseFn<Partial<CodeCheckDto>, Partial<CodeCheckDto>>;
};

function PhoneCheckoutForm({
  code,
  setIsPhoneConfirmed,
  isPhoneConfirmed,
  getCheckoutCode,
  createCheckoutCode,
}: Props) {
  const order = useStore($orderStore);

  const codeHandler = () => {
    const codeInput = order.checkoutCode;

    if (codeInput && !Number.isNaN(+codeInput)) {
      getCheckoutCode({
        code: codeInput,
        uuid: getClientUuid(),
      }).then((v) => {
        setIsPhoneConfirmed(!!v);
        v.uuid && updateOrderStore({ phoneConfirmed: true });
      });
    }
  };

  const createCodeSms = () =>
    createCheckoutCode({
      phoneNumber: order.phone,
      uuid: getClientUuid(),
    }).then(() => updateOrderStore({ codeSent: true }));

  const { seconds, minutes, isRunning, restart } = useTimer({
    expiryTimestamp: code?.item?.expiredAt || new Date(),
  });

  useEffect(() => {
    if (code?.item?.expiredAt) {
      const localTime = moment(code.item.expiredAt).local().toDate();
      restart(localTime);
    }
  }, [code?.item?.expiredAt]);

  return (
    <Row gutter={[8, 8]} className='phone-code__chekout'>
      <Col sm={24} span={14}>
        <label htmlFor='order-phone'>Телефон</label>

        <InputMask
          mask='+7 (999) 999-99-99'
          disabled={isPhoneConfirmed}
          name={dataName('phoneNumber')}
        />

        <CheckoutTimer isRunning={isRunning} minutes={minutes} seconds={seconds} />
      </Col>
      <Col sm={24} span={10}>
        <SendCodeButton createCodeSms={createCodeSms} disabled={isPhoneConfirmed || isRunning} />
      </Col>
      <Col sm={24} span={24}>
        <label htmlFor='sms-code' className='label-sms-code'>
          Код из СМС
        </label>
        <InputMask
          name={dataName('code')}
          mask='9999'
          disabled={!isRunning && (!order.codeSent || isPhoneConfirmed)}
          className='order-form-sms-code'
          onChange={codeHandler}
        />
      </Col>
    </Row>
  );
}

export default memo(PhoneCheckoutForm);

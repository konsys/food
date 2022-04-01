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
import { TPromiseFn } from '../../../../common/types';
import { TItem } from '../../../../common/api/types';
import { $orderStore, updateOrderStore } from '../../../../modules/order/model';

import './phoneCodeCheckoutForm.less';

const dataName = columnsNamesGenerator<CodeCheckDto>();

function phoneValidator(value?: string) {
  const pattern = /^\+[\d]{1} [(]{1}[\d]{3}[)]{1} [\d]{3}-[\d]{2}-[\d]{2}$/;
  if (!value || !pattern.test(value)) {
    return false;
  }
  return true;
}

type Props = {
  code: TItem<CodeCheckDto>;
  getCheckoutCode: TPromiseFn<Partial<CodeCheckDto>, Partial<CodeCheckDto>>;
  createCheckoutCode: TPromiseFn<Partial<CodeCheckDto>, Partial<CodeCheckDto>>;
};

function PhoneCheckoutForm({
  code,
  getCheckoutCode,
  createCheckoutCode,
}: Props) {
  const order = useStore($orderStore);

  const codeHandler = (e: any) => {
    const codeInput = e.target.value;
    updateOrderStore({ confirmationCode: codeInput, isCodeValid: true });

    if (codeInput && !Number.isNaN(+codeInput)) {
      getCheckoutCode({
        code: codeInput,
        uuid: getClientUuid(),
      }).then((v) => {
        updateOrderStore({ phoneConfirmed: !!v.uuid, isCodeValid: !!v.uuid });
      });
    }
  };

  const createCodeSms = () => {
    const isPhoneValid = phoneValidator(order.phone);
    updateOrderStore({
      confirmationCode: '____',
      isPhoneValid,
      isCodeValid: true,
    });

    if (isPhoneValid) {
      createCheckoutCode({
        phoneNumber: order.phone,
        uuid: getClientUuid(),
      }).then(() => updateOrderStore({ codeSent: true }));
    }
  };

  const { seconds, minutes, isRunning, restart } = useTimer({
    expiryTimestamp: code?.item?.expiredAt || new Date(),
  });

  useEffect(() => {
    if (code?.item?.expiredAt) {
      const localTime = moment(code.item.expiredAt).local().toDate();
      restart(localTime);
    }
  }, [code?.item?.expiredAt, moment]);

  useEffect(() => {
    updateOrderStore({ isTimerRunning: isRunning });
  }, [updateOrderStore, isRunning]);

  const handlePhone = (e: any) => {
    updateOrderStore({ phone: e.target.value, isPhoneValid: true });
  };

  return (
    <Row gutter={[8, 8]} className="phone-code__chekout">
      <Col span={24}>
        <label htmlFor="order-phone">Телефон</label>

        <InputMask
          mask="+7 (999) 999-99-99"
          disabled={order.phoneConfirmed || order.isTimerRunning}
          name={dataName('phoneNumber')}
          value={order.phone}
          onChange={handlePhone}
        />
        {!order.isPhoneValid && (
          <div className="input-promocode-error ">Неверный номер телефона</div>
        )}

        <CheckoutTimer
          isRunning={!!order.isTimerRunning}
          minutes={minutes}
          seconds={seconds}
        />
      </Col>
      <Col span={24}>
        <SendCodeButton
          createCodeSms={createCodeSms}
          disabled={order.phoneConfirmed || isRunning}
        />
      </Col>
      <Col span={24}>
        <label htmlFor="sms-code" className="label-sms-code">
          Код из СМС
        </label>
        <InputMask
          name={dataName('code')}
          mask="9999"
          disabled={!isRunning || order.phoneConfirmed}
          className="order-form-sms-code"
          onChange={codeHandler}
          value={order.confirmationCode}
        />
        {!order.isCodeValid && (
          <div className="input-promocode-error">Код неверный</div>
        )}
      </Col>
    </Row>
  );
}

export default memo(PhoneCheckoutForm);

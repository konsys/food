import { Col, Row } from 'antd';
import React, { memo, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import moment from 'moment';
import InputMask from 'react-input-mask';
import { useGate, useStore } from 'effector-react';
import { green } from '@ant-design/colors';
import CheckoutTimer from '../../components/ChecloutTimer/CheckoutTimer';
import { CodeCheckDto } from '../../../../modules/codeCheck/types';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { getClientUuid } from '../../../../modules/cart/service';
import SendCodeButton from '../../components/SendCodeButton/SendCodeButton';
import { $orderStore, updateOrderStore } from '../../../../modules/order/model';
import { PHONE_FORMAT } from '../../../../common/constants/constants';
import { CodeCheckModel } from '../../../../store';

import './phoneCodeCheckout.less';
import { TVoidFn } from '../../../../common/types';

const {
  createNewItemFx: createCheckoutCode,
  getItemByFilterFx: getCheckoutCode,
  $itemStore: codeCheckStore,
  ItemGate: CodeCheckGate,
} = CodeCheckModel;

const dataName = columnsNamesGenerator<CodeCheckDto>();

function phoneValidator(value?: string) {
  const pattern = /^\+[\d]{1} [(]{1}[\d]{3}[)]{1} [\d]{3}-[\d]{2}-[\d]{2}$/;
  if (!value || !pattern.test(value)) {
    return false;
  }
  return true;
}

interface Props {
  setPhoneNumber?: TVoidFn<string>;
}
function PhoneCheckout(props: Props) {
  const { setPhoneNumber } = props;

  useGate(CodeCheckGate, getClientUuid());

  const order = useStore($orderStore);
  const code = useStore(codeCheckStore);

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

  useEffect(() => {
    if (setPhoneNumber && order.phoneConfirmed && order.phone) {
      setPhoneNumber(order.phone);
    }
  }, [setPhoneNumber, order.phoneConfirmed, order.phone]);

  const handlePhone = (e: any) => {
    updateOrderStore({
      phone: e.target.value,
      isPhoneValid: true,
      userUuid: getClientUuid(),
    });
  };

  return (
    <Row gutter={[8, 8]} className="phone-code__checkout">
      <Col span={24}>
        <div>Телефон</div>
        <div>
          <InputMask
            mask={PHONE_FORMAT}
            disabled={order.phoneConfirmed || order.isTimerRunning}
            name={dataName('phoneNumber')}
            value={order.phone}
            onChange={handlePhone}
          />
          <SendCodeButton
            createCodeSms={createCodeSms}
            disabled={order.phoneConfirmed || isRunning}
          />
        </div>
        {!order.isPhoneValid && (
          <div className="input-promocode-error">Неверный номер телефона</div>
        )}
        {order.phoneConfirmed ? (
          ''
        ) : (
          <CheckoutTimer
            isRunning={!!order.isTimerRunning}
            minutes={minutes}
            seconds={seconds}
          />
        )}
      </Col>

      <Col span={24}>
        <div>Код из СМС</div>
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
      <Col span={24}>
        <span style={{ color: green[6] }}>
          {order.phoneConfirmed ? 'Телефон подтвержден' : ''}
        </span>
      </Col>
    </Row>
  );
}

export default memo(PhoneCheckout);

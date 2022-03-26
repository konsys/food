import { Form } from 'antd';
import React, { memo, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import moment from 'moment';
import InputMask from 'react-input-mask';
import CheckoutTimer from '../../components/ChecloutTimer/CheckoutTimer';
import { CodeCheckDto } from '../../../../modules/codeCheck/types';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { getClientUuid } from '../../../../modules/cart/service';
import SendCodeButton from '../../components/SendCodeButton/SendCodeButton';
import { TPromiseFn, TVoidFn } from '../../../../common/types';
import { TItem } from '../../../../common/api/types';

import './PhoneCheckoutForm.less';

const { Item } = Form;

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
  formInstance: any;
  setIsWrongCode: TVoidFn<boolean>;
  setIsCodeSent: TVoidFn<boolean>;
  getCheckCode: TPromiseFn<Partial<CodeCheckDto>, Partial<CodeCheckDto>>;
  createCheckoutCode: TPromiseFn<Partial<CodeCheckDto>, Partial<CodeCheckDto>>;
  isCodeSent: boolean;
  isWrongCode: boolean;
};

function PhoneCheckoutForm({
  code,
  setIsPhoneConfirmed,
  isPhoneConfirmed,
  formInstance,
  setIsWrongCode,
  setIsCodeSent,
  getCheckCode,
  createCheckoutCode,
  isCodeSent,
  isWrongCode,
}: Props) {
  const codeHandler = () => {
    const codeInput = formInstance.getFieldValue('code');

    if (!Number.isNaN(+codeInput)) {
      getCheckCode({
        code: codeInput,
        uuid: getClientUuid(),
      }).then((v) => {
        setIsWrongCode(!!v);
        setIsPhoneConfirmed(!!v);
      });
    }
  };

  const createCode = (code: CodeCheckDto) => {
    createCheckoutCode({
      phoneNumber: code.phoneNumber,
      uuid: getClientUuid(),
    }).then(() => setIsCodeSent(true));
  };

  const sendCode = () => formInstance.validateFields().then(createCode);

  const { seconds, minutes, isRunning, restart } = useTimer({
    expiryTimestamp: code?.item?.expiredAt || new Date(),
  });

  useEffect(() => {
    if (code?.item?.expiredAt) {
      const localTime = moment(code.item.expiredAt).local().toDate();
      restart(localTime);
    }
  }, [code?.item?.expiredAt]);

  const loading = code?.pending ?? false;

  return (
    <div className='ordering-form__phone'>
      <div className='input-phone-wrapper'>
        <label htmlFor='order-phone'>Телефон</label>
        <Item
          name={dataName('phoneNumber')}
          rules={[
            {
              validator: phoneValidator,
            },
          ]}
        >
          <InputMask mask='+7 (999) 999-99-99' disabled={isPhoneConfirmed} />
        </Item>
        <CheckoutTimer isRunning={isRunning} minutes={minutes} seconds={seconds} />
        <div className='input-phone-wrapper--ok' />
      </div>
      <SendCodeButton
        sendCode={sendCode}
        loading={loading}
        disabled={isPhoneConfirmed || isRunning}
      />
      <div className='check-oh-hidden'>
        <label htmlFor='sms-code' className='label-sms-code'>
          Код из СМС
        </label>
        <Item name={dataName('code')}>
          <InputMask
            mask='9999'
            disabled={!isRunning && (!isCodeSent || loading || isPhoneConfirmed)}
            className='order-form-sms-code'
            onChange={codeHandler}
          />
        </Item>
        {!isWrongCode ? <div className='input-code-error'>Неверный код</div> : ''}
        {isPhoneConfirmed ? <div className='input-code-success'>Телефон подтвержден</div> : ''}
      </div>
    </div>
  );
}

export default memo(PhoneCheckoutForm);

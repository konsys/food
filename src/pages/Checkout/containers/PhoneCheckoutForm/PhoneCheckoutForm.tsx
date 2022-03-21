import { Form } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { useGate, useStore } from 'effector-react';
import moment from 'moment';
import InputMask from 'react-input-mask';
import CheckoutTimer from '../../components/ChecloutTimer/CheckoutTimer';
import { CodeCheckModel } from '../../../../store';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { CodeCheckDto } from '../../../../modules/codeCheck/types';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { getClientUuid } from '../../../../modules/cart/service';
import SendCodeButton from '../../components/SendCodeButton/SendCodeButton';

import './PhoneCheckoutForm.less';

const { Item } = Form;

const {
  createItemWithoutFetchingListFx,
  $itemPending,
  getItemByFilterFx,
  $itemStore,
  ItemGate: CodeCheckGate,
} = CodeCheckModel;

const dataName = columnsNamesGenerator<CodeCheckDto>();

function phoneValidator(rule: any, value: string) {
  const pattern = /^\+[\d]{1} [(]{1}[\d]{3}[)]{1} [\d]{3}-[\d]{2}-[\d]{2}$/;
  if (!pattern.test(value)) {
    return Promise.reject(new Error('Пожалуйста, введите номер телефона'));
  }
  return Promise.resolve();
}

function PhoneCheckoutForm() {
  useGate(CodeCheckGate, getClientUuid());

  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [isWrongCode, setIsWrongCode] = useState<boolean>(true);
  const { item } = useStore($itemStore);

  const { Form: PhoneCheckForm, formInstance } = useValidatedForm<CodeCheckDto>({
    phoneNumber: '1111',
    code: '1111',
  });

  const loading = useStore($itemPending);

  const codeHandler = () => {
    const code = formInstance.getFieldValue(dataName('code'));
    if (!Number.isNaN(+code)) {
      getItemByFilterFx({
        code,
        uuid: getClientUuid(),
      }).then((v) => {
        setIsWrongCode(!!v);
      });
    }
  };

  const createCode = (code: CodeCheckDto) => {
    createItemWithoutFetchingListFx({
      phoneNumber: code.phoneNumber,
      uuid: getClientUuid(),
    }).then(() => setIsCodeSent(true));
  };

  const sendCode = () => formInstance.validateFields().then(createCode);

  const { seconds, minutes, isRunning, restart } = useTimer({
    expiryTimestamp: item?.expiredAt || new Date(),
  });

  useEffect(() => {
    if (item) {
      const localTime = moment(item.expiredAt).local().toDate();
      restart(localTime);
    }
  }, [item?.expiredAt]);

  return (
    <PhoneCheckForm>
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
            <InputMask mask='+7 (999) 999-99-99' />
          </Item>
          <CheckoutTimer isRunning={isRunning} minutes={minutes} seconds={seconds} />
          <div className='input-phone-wrapper--ok' />
        </div>
        <SendCodeButton sendCode={sendCode} loading={loading} isRunning={isRunning} />
        <div className='check-oh-hidden'>
          <label htmlFor='sms-code' className='label-sms-code'>
            Код из СМС
          </label>
          <Item name={dataName('code')}>
            <InputMask
              mask='9999'
              disabled={!isCodeSent}
              className='order-form-sms-code'
              onChange={codeHandler}
            />
          </Item>
          {!isWrongCode ? <div className='input-code-error'>Неверный код</div> : ''}
        </div>
      </div>
    </PhoneCheckForm>
  );
}

export default memo(PhoneCheckoutForm);

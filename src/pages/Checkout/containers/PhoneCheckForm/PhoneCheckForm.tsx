import { Button, Form } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { useGate, useStore } from 'effector-react';
import moment from 'moment';
import MaskedInput from 'antd-mask-input';
import CheckoutTimer from '../../components/ChecloutTimer/CheckoutTimer';
import { CodeCheckModel } from '../../../../store';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { CodeCheckDto } from '../../../../modules/codeCheck/types';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { getClientUuid } from '../../../../modules/cart/service';

import './phoneCheckForm.less';
import SendCodeButton from '../../components/SendCodeButton/SendCodeButton';

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
  const pattern = /^\+[\d]{1} [\d]{3} [\d]{3} [\d]{2} [\d]{2}$/;
  if (!pattern.test(value)) {
    return Promise.reject(new Error('Пожалуйста, введите номер телефона'));
  }
  return Promise.resolve();
}
function PhoneCheckForm() {
  useGate(CodeCheckGate, getClientUuid());

  const [isWrongCode, setIsWrongCode] = useState<boolean>(true);
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const { item } = useStore($itemStore);

  const { Form: MForm, formInstance } = useValidatedForm<CodeCheckDto>({ phoneNumber: undefined });

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
    }).then((v) => {
      formInstance.setFieldsValue(v);
      setIsCodeSent(true);
    });
  };

  const sendCode = () => formInstance.validateFields().then(createCode);

  const { seconds, minutes, isRunning, restart } = useTimer({
    expiryTimestamp: item?.expiredAt || new Date(),
    onExpire: () => console.log('onExpire called'),
  });

  useEffect(() => {
    if (item) {
      const localTime = moment(item.expiredAt).local().toDate();
      restart(localTime);
    }
  }, [item?.expiredAt]);

  return (
    <MForm>
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
            <MaskedInput mask='+7 111 111 11 11' size='middle' />
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
            <MaskedInput
              mask='1111'
              disabled={!isCodeSent}
              className='order-form-sms-code'
              onChange={codeHandler}
            />
          </Item>
          {!isWrongCode ? <div className='input-code-error'>Неверный код</div> : ''}
        </div>
      </div>
    </MForm>
  );
}

export default memo(PhoneCheckForm);

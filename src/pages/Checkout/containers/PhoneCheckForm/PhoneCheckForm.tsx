import { Button, Form, Input } from 'antd';
import React, { memo, useState } from 'react';
import { useGate, useStore } from 'effector-react';
import moment from 'moment';
import MaskedInput from 'antd-mask-input';
import { useParams } from 'react-router-dom';
import { CodeCheckModel } from '../../../../store';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { CodeCheckDto } from '../../../../modules/codeCheck/types';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { getClientUuid } from '../../../../modules/cart/service';
import { queryParamsFromObject } from '../../../../common/utils/utils';

import './phoneCheckForm.less';
import ChecloutTimer from '../../components/ChecloutTimer/CheckoutTimer';

const { Item } = Form;

const { createItemWithoutFetchingListFx, $itemPending, getItemByFilterFx, $itemStore, ItemGate } =
  CodeCheckModel;

const dataName = columnsNamesGenerator<CodeCheckDto>();

function PhoneCheckForm() {
  const { uuid } = useParams<{ uuid: string }>();
  useGate(ItemGate, uuid);

  const [isWrongCode, setIsWrongCode] = useState<boolean>(true);
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const { item } = useStore($itemStore);

  const { Form: MForm, formInstance } = useValidatedForm<CodeCheckDto>({ phoneNumber: undefined });

  const loading = useStore($itemPending);

  const codeHandler = () => {
    const code = formInstance.getFieldValue(dataName('code'));
    if (!Number.isNaN(+code)) {
      getItemByFilterFx(
        queryParamsFromObject({
          code,
          clientUuid: getClientUuid(),
          uuid: formInstance.getFieldValue(dataName('uuid')),
        })
      ).then((v) => {
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

  function phoneValidator(rule: any, value: string) {
    const pattern = /^\+[\d]{1} [\d]{3} [\d]{3} [\d]{2} [\d]{2}$/;
    if (!pattern.test(value)) {
      return Promise.reject(new Error('Пожалуйста, введите номер телефона'));
    }
    return Promise.resolve();
  }

  return (
    <MForm>
      <div style={{ display: 'none' }}>
        <Item name={dataName('uuid')}>
          <Input type='text' />
        </Item>
      </div>
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
          <ChecloutTimer expiryTimestamp={item?.expiredAt || new Date()} />
          <div className='input-phone-wrapper--ok' />
        </div>
        <div className='check-oh-hidden'>
          <label>&nbsp;</label>
          <Item>
            <Button
              type='primary'
              className='order-form-send-code'
              loading={loading}
              onClick={sendCode}
            >
              Получить код
            </Button>
          </Item>
        </div>
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

import { Button, Form, Input } from 'antd';
import React, { memo, useState } from 'react';
import { useStore } from 'effector-react';
import MaskedInput from 'antd-mask-input';
import { CodeCheckModel } from '../../../../store';
import './phoneCheckForm.less';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { CodeCheckDto } from '../../../../modules/codeCheck/types';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { getClientUuid } from '../../../../modules/cart/service';
import { queryParamsFromObject } from '../../../../common/utils/utils';

const { Item } = Form;

const { createItemWithoutFetchingListFx, $itemPending, getItemByFilterFx, $itemStore } =
  CodeCheckModel;
const dataName = columnsNamesGenerator<CodeCheckDto>();

function PhoneCheckForm() {
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
      clientUuid: getClientUuid(),
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

  console.log(23423423423, item);

  return (
    <MForm>
      <div style={{ display: 'none' }}>
        <Item name={dataName('uuid')}>
          <Input type='text' />
        </Item>
        <Item name={dataName('clientUuid')}>
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
          <div className='ordering-form__phone-info'>
            Вы сможете отправить код еще раз через
            <span className='code_mins'>1</span>
            <span>:</span>
            <span className='code_secs'>00</span>
          </div>
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

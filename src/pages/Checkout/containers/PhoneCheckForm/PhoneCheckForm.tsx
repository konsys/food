import { Button, Form } from 'antd';
import React, { memo, useState } from 'react';
import { useStore } from 'effector-react';
import MaskedInput from 'antd-mask-input';
import { CodeCheckModel } from '../../../../store';
import './phoneCheckForm.less';
import { uuid } from '../../../../common/utils/utils';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { CodeCheckDto } from '../../../../modules/codeCheck/types';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';

const { Item } = Form;

interface Props {}

const { createItemFx, $itemPending, $itemStore } = CodeCheckModel;
const dataName = columnsNamesGenerator<CodeCheckDto>();

function PhoneCheckForm(props: Props) {
  const { Form: MForm, formInstance } = useValidatedForm<CodeCheckDto>({ phoneNumber: undefined });
  const [sendCodeDisabled, setSendCodeDisabled] = useState<boolean>(false);

  const loading = useStore($itemPending);
  const { item } = useStore($itemStore);

  const sendCode = () => {
    formInstance.validateFields().then(async (validatedFormItem) => {
      createItemFx({ phoneNumber: validatedFormItem.phoneNumber, uuid: uuid() });
    });
  };

  function phoneValidator(rule: any, value: string) {
    const pattern = /^\+[\d]{1} [\d]{3} [\d]{3} [\d]{2} [\d]{2}$/;
    if (!pattern.test(value)) {
      setSendCodeDisabled(false);
      return Promise.reject(new Error('Пожалуйста, введите номер телефона'));
    }
    // setSendCodeEnabled(true);
    return Promise.resolve();
  }

  return (
    <MForm>
      <div className='ordering-form__phone'>
        <div className='input-phone-wrapper'>
          <label htmlFor='order-phone'>Телефон</label>
          <Item
            name={dataName('phoneNumber')}
            rules={[
              { required: true },
              {
                validator: phoneValidator,
              },
            ]}
          >
            <MaskedInput mask='+1 111 111 11 11' size='middle' />
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
              disabled={sendCodeDisabled}
            >
              Получить код
            </Button>
          </Item>
        </div>
        <div className='check-oh-hidden'>
          <label htmlFor='sms-code' className='label-sms-code'>
            Код из СМС
          </label>
          <input
            type='tel'
            name='code'
            className='order-form-sms-code'
            disabled
            value={item?.code}
          />
          <div className='input-code-error'>Неверный код</div>
        </div>
      </div>
    </MForm>
  );
}

export default memo(PhoneCheckForm);

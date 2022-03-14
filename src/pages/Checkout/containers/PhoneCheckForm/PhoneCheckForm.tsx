import { Button, Form } from 'antd';
import React, { memo } from 'react';
import { useStore } from 'effector-react';
import MaskedInput from 'antd-mask-input';
import { CodeCheckModel } from '../../../../store';
import './phoneCheckForm.less';
import { uuid } from '../../../../common/utils/utils';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';

const { Item } = Form;

interface Props {}

const { createItemFx, $itemPending, $itemStore } = CodeCheckModel;

function PhoneCheckForm(props: Props) {
  const { Form: MForm } = useValidatedForm<any>();

  const loading = useStore($itemPending);
  const { item } = useStore($itemStore);

  return (
    <MForm>
      <div className='ordering-form__phone'>
        <div className='input-phone-wrapper'>
          <label htmlFor='order-phone'>Телефон</label>
          <Item name='layout'>
            <MaskedInput mask='+1 111 111 11 11' name='card' size='middle' />
          </Item>
          <div className='ordering-form__phone-info'>
            Вы сможете отправить код еще раз через
            <span className='code_mins'>1</span>
            <span>:</span>
            <span className='code_secs'>00</span>
          </div>
          <div className='input-phone-wrapper--ok' />
        </div>{' '}
        <div className='check-oh-hidden'>
          <label>&nbsp;</label>
          <Item>
            <Button
              type='primary'
              className='order-form-send-code'
              loading={loading}
              onClick={() =>
                createItemFx({
                  code: '234234',
                  phoneNumber: 'wefwefwef',
                  id: null,
                  uuid: uuid(),
                })
              }
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

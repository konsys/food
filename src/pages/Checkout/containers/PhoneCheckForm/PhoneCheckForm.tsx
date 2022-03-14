import React, { memo } from 'react';

import './phoneCheckForm.less';

interface Props {}

function PhoneCheckForm(props: Props) {
  const {} = props;

  return (
    <div className='ordering-form__phone'>
      <div className='input-phone-wrapper'>
        <label htmlFor='order-phone'>Телефон</label>
        <input
          type='tel'
          name='phone'
          className='input-mask-phone input-mask-phone--anon'
          placeholder='+7 (999) 123-45-67'
        />
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
        <button className='order-form-send-code' disabled type='button'>
          Получить код
        </button>
      </div>
      <div className='check-oh-hidden'>
        <label htmlFor='sms-code' className='label-sms-code'>
          Код из СМС
        </label>
        <input type='tel' name='code' className='order-form-sms-code' disabled />
        <div className='input-code-error'>Неверный код</div>
      </div>
    </div>
  );
}

export default memo(PhoneCheckForm);

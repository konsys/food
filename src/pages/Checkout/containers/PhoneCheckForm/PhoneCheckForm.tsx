import React, { memo } from 'react';

interface Props {}

function PhoneCheckForm(props: Props) {
  const {} = props;

  return (
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
    </div>
  );
}

export default memo(PhoneCheckForm);

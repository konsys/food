import React, { memo } from 'react';

interface Props {}

function PromocodeCheckoutForm(props: Props) {
  const {} = props;

  return (
    <div className='form-checkout-promocode'>
      <label htmlFor='order-promocode'>Промокод</label>
      <input type='text' name='promocode' disabled className='form-checkout-promocode__input' />
      <div className='form-checkout-promocode__button-wrapper'>
        <button
          className='form-checkout-promocode__button'
          data-cancel='false'
          disabled
          type='button'
        >
          Применить
        </button>
      </div>
      <div className='input-promocode-error'>Неверный промокод</div>
    </div>
  );
}

export default memo(PromocodeCheckoutForm);

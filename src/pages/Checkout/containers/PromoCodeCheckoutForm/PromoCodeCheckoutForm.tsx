import { useStore } from 'effector-react';
import React, { memo, useEffect, useState } from 'react';
import { updateOrderStore } from '../../../../modules/order/model';
import { PromoModel } from '../../../../store';

interface Props {
  disabled: boolean;
}

const { getItemByFilterFx, $itemStore } = PromoModel;

function PromoCodeCheckoutForm(props: Props) {
  const { disabled } = props;
  const [code, setCode] = useState<string>();

  const { item, error } = useStore($itemStore);

  useEffect(() => {
    item?.uuid && updateOrderStore({ promoCodeUuid: item?.uuid });
  }, [item, updateOrderStore]);

  return (
    <div className='form-checkout-promocode'>
      <label htmlFor='order-promocode'>Промокод</label>
      <input
        type='text'
        name='promocode'
        disabled={disabled}
        className='form-checkout-promocode__input'
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div className='form-checkout-promocode__button-wrapper'>
        <button
          className='form-checkout-promocode__button'
          data-cancel='false'
          disabled={disabled || !code}
          type='button'
          onClick={() => getItemByFilterFx({ code })}
        >
          Применить
        </button>
      </div>
      {error ? <div className='input-promocode-error'>Неверный промокод</div> : ''}
      {item ? (
        <div className='input-promocode-success'>{`Скидка ${item.percentDiscount}%`}</div>
      ) : (
        ''
      )}
    </div>
  );
}

export default memo(PromoCodeCheckoutForm);

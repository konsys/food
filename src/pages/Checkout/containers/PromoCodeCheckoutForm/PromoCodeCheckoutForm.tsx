import { useStore } from 'effector-react';
import React, { memo, useEffect, useState } from 'react';
import { $orderStore, updateOrderStore } from '../../../../modules/order/model';
import { PromoModel } from '../../../../store';

interface Props {
  disabled: boolean;
}

const { getItemByFilterFx, $itemStore } = PromoModel;

function PromoCodeCheckoutForm(props: Props) {
  const { disabled } = props;
  const [code, setCode] = useState<string>();

  const { item, error } = useStore($itemStore);
  const order = useStore($orderStore);

  useEffect(() => {
    item?.uuid &&
      item?.percentDiscount &&
      updateOrderStore({ promoCodeUuid: item?.uuid, percentDiscount: item?.percentDiscount });
    error && updateOrderStore({ promoCodeUuid: undefined, percentDiscount: undefined });
  }, [item, updateOrderStore, error]);

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
      {order.percentDiscount ? (
        <div className='input-promocode-success'>{`Скидка ${order.percentDiscount}%`}</div>
      ) : (
        ''
      )}
    </div>
  );
}

export default memo(PromoCodeCheckoutForm);

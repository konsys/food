import { Radio } from 'antd';
import React, { memo } from 'react';

interface Props {}

function PaymentsCheckoutForm(props: Props) {
  const {} = props;

  return (
    <div className='ordering-form__payments'>
      <div className='page-title page-title--checkout'>
        <h2>Оплата</h2>
      </div>
      <div className='custom-input-buttons'>
        <Radio.Group onChange={() => null} value={1}>
          <Radio value={1}>Картой онлайн</Radio>
        </Radio.Group>

        <span className='ordering-form__payments--info'>
          Мы заблокируем средства и спишем после завершения заказа.
        </span>
      </div>
      <input type='hidden' name='binding_id' />
    </div>
  );
}

export default memo(PaymentsCheckoutForm);

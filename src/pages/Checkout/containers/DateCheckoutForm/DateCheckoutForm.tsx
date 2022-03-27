import DateTimePicker from 'react-datetime-picker';
import React, { memo, useState } from 'react';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { TDateCheckoutForm } from '../../../../modules/checkout/types';
import { TItemWithUuid } from '../../../../common/types';
import { OrderDto } from '../../../../modules/order/types';
import { TCreateItemFx } from '../../../../common/models/abstractModel/abstractCrudModel';
import { Nullable } from '../../../../core/types';
import { uuid } from '../../../../common/utils/utils';
import { CartDto } from '../../../../modules/cart/types';
import { TItem } from '../../../../common/api/types';

interface Props {
  disabled: boolean;
  onSaveDate: TCreateItemFx<Partial<OrderDto>, TItemWithUuid<OrderDto>>;
  cart: TItem<CartDto>;
}

const dataName = columnsNamesGenerator<TDateCheckoutForm>();

function DateCheckoutForm(props: Props) {
  const { disabled, onSaveDate, cart } = props;

  const [orderDate, setOrderDate] = useState<Nullable<Date>>(null);

  const [dateSet, isDateSet] = useState<boolean>(false);

  const saveDate = () => {
    if (orderDate) {
      return onSaveDate({ date: orderDate, uuid: cart?.item?.uuid }).then(() => isDateSet(true));
    }
    return null;
  };

  return (
    <div className='ordering-form__time--input'>
      <label>Время бронирования</label>
      <div className='order-options-time'>
        <DateTimePicker
          name={dataName('orderDate')}
          disabled={disabled}
          onClockClose={saveDate}
          onChange={setOrderDate}
          value={orderDate ?? undefined}
        />
        {dateSet ? <div className='input-code-success'>Дата сохранена</div> : ''}
      </div>
    </div>
  );
}

export default memo(DateCheckoutForm);

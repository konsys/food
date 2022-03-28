import DatePicker from 'react-date-picker';
import React, { memo, useState } from 'react';
import { Select } from 'antd';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { TDateCheckoutForm } from '../../../../modules/checkout/types';
import { TItemWithUuid } from '../../../../common/types';
import { EOrderStatus, OrderDto } from '../../../../modules/order/types';
import { TCreateItemFx } from '../../../../common/models/abstractModel/abstractCrudModel';
import { Nullable } from '../../../../core/types';
import { CartDto } from '../../../../modules/cart/types';
import { TItem } from '../../../../common/api/types';
import { createOptionsList } from '../../../../common/utils/selectUtils';
import './dateCheckoutForm.less';

// TODO add order time
const options = createOptionsList([
  { id: '19-00', value: '19-00' },
  { id: '18-00', value: '18-30' },
  { id: '19-30', value: '19-00' },
  { id: '19-30', value: '19-30' },
]);

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

  const onDateChange = (date: Date) => {
    setOrderDate(date);
    onSaveDate({
      date,
      uuid: cart?.item?.uuid,
      places: 1,
      status: EOrderStatus.CREATED,
      price: cart?.item?.orderSum,
    }).then(() => isDateSet(true));
  };

  return (
    <div className='ordering-form__time--input'>
      <div className='order-options-time__date-select'>
        <label>Дата бронирования</label>
        <DatePicker
          name={dataName('orderDate')}
          disabled={disabled}
          onChange={onDateChange}
          value={orderDate ?? undefined}
          minDate={new Date()}
        />
        {dateSet ? <div className='input-code-success'>Дата сохранена</div> : ''}
      </div>
      <div className='order-options-time__time-select'>
        <label>Время бронирования</label>
        <Select disabled={disabled} style={{ width: '100%' }}>
          {options}
        </Select>
      </div>
    </div>
  );
}

export default memo(DateCheckoutForm);

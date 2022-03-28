import DatePicker from 'react-date-picker';
import React, { memo } from 'react';
import { Select } from 'antd';
import { useStore } from 'effector-react';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { TDateCheckoutForm } from '../../../../modules/checkout/types';
import { CartDto } from '../../../../modules/cart/types';
import { TItem } from '../../../../common/api/types';
import { createOptionsList } from '../../../../common/utils/selectUtils';
import './dateCheckoutForm.less';
import { $orderStore, updateOrderStore } from '../../../../modules/order/model';

// TODO add order time
const options = createOptionsList([
  { id: '19-00', value: '19-00' },
  { id: '18-00', value: '18-30' },
  { id: '19-30', value: '19-00' },
  { id: '19-30', value: '19-30' },
]);

interface Props {
  disabled: boolean;
  cart: TItem<CartDto>;
}

const dataName = columnsNamesGenerator<TDateCheckoutForm>();

function DateCheckoutForm(props: Props) {
  const { disabled, cart } = props;

  const onDateChange = (date: Date) => {
    updateOrderStore({ date, uuid: cart?.item?.uuid });
  };

  const onTimeChange = (time: string) => {
    updateOrderStore({ time, uuid: cart?.item?.uuid });
  };

  const orderStore = useStore($orderStore);

  return (
    <div className='ordering-form__time--input'>
      <div className='order-options-time__date-select'>
        <label>Дата бронирования</label>
        <DatePicker
          name={dataName('orderDate')}
          disabled={disabled}
          onChange={onDateChange}
          value={orderStore.date}
          minDate={new Date()}
        />
      </div>
      <div className='order-options-time__time-select'>
        <label>Время бронирования</label>
        <Select
          disabled={disabled}
          style={{ width: '100%' }}
          onChange={onTimeChange}
          value={orderStore.time}
        >
          {options}
        </Select>
      </div>
    </div>
  );
}

export default memo(DateCheckoutForm);

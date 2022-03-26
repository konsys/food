import DateTimePicker from 'react-datetime-picker';
import React, { memo } from 'react';
import { Form } from 'antd';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { TCheckoutForm } from '../../../../modules/checkout/types';

interface Props {
  disabled: boolean;
}
const { Item } = Form;

const dataName = columnsNamesGenerator<TCheckoutForm>();

function DateCheckoutForm(props: Props) {
  const { disabled } = props;

  return (
    <div className='ordering-form__time--input'>
      <label>Время бронирования</label>
      <div className='order-options-time'>
        <Item
          name={dataName('orderDate')}
          rules={[
            {
              required: true,
            },
          ]}
        >
          {/* <DateTimePicker disabled={disabled} onChange={setTime} value={time} /> */}
          <DateTimePicker disabled={disabled} />
        </Item>
      </div>
    </div>
  );
}

export default memo(DateCheckoutForm);

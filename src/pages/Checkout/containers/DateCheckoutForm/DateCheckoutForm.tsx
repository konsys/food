import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import React, { memo } from 'react';

interface Props {}

function DateCheckoutForm(props: Props) {
  const {} = props;

  return (
    <div className='ordering-form__time--input'>
      <label>Время бронирования</label>
      <div className='order-options-time'>
        <DatePicker
          className='order-options-time_select-date'
          mode='date'
          defaultValue={moment()}
          bordered={false}
        />
        <TimePicker
          className='order-options-time__select-time'
          minuteStep={30}
          secondStep={60}
          bordered={false}
        />
      </div>
    </div>
  );
}

export default memo(DateCheckoutForm);

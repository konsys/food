import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import React, { memo } from 'react';

interface Props {}

function DateCheckoutForm(props: Props) {
  const {} = props;

  return (
    <div className='ordering-form__time--input'>
      <label>Время бронирования</label>
      <div className='order-options-time'>
        <DateTimePicker onChange={() => null} value={moment().toDate()} />
      </div>
    </div>
  );
}

export default memo(DateCheckoutForm);

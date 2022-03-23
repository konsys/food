import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import React, { memo, useState } from 'react';

interface Props {
  disabled: boolean;
}

function DateCheckoutForm(props: Props) {
  const { disabled } = props;

  const [time, setTime] = useState<Date>(moment().toDate());

  return (
    <div className='ordering-form__time--input'>
      <label>Время бронирования</label>
      <div className='order-options-time'>
        <DateTimePicker disabled={disabled} onChange={setTime} value={time} />
      </div>
    </div>
  );
}

export default memo(DateCheckoutForm);

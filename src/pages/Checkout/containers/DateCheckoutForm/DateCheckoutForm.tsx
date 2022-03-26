import DateTimePicker from 'react-datetime-picker';
import React, { memo, useState } from 'react';
import { Form } from 'antd';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { TDateCheckoutForm } from '../../../../modules/checkout/types';
import { TItemWithUuid } from '../../../../common/types';
import { OrderDto } from '../../../../modules/order/types';
import { TCreateItemFx } from '../../../../common/models/abstractModel/abstractCrudModel';

interface Props {
  disabled: boolean;
  onSaveDate: TCreateItemFx<Partial<OrderDto>, TItemWithUuid<OrderDto>>;
  dateFormInstance: any;
}
const { Item } = Form;

const dataName = columnsNamesGenerator<TDateCheckoutForm>();

function DateCheckoutForm(props: Props) {
  const { disabled, onSaveDate, dateFormInstance } = props;

  const [dateSet, isDateSet] = useState<boolean>(false);

  const saveDate = () =>
    dateFormInstance.validateFields().then((v: OrderDto) => {
      console.log(234234234, v);
      return onSaveDate(v).then(() => isDateSet(true));
    });

  const onDateSelect = (e: any) => console.log(234234234, e);

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
          <DateTimePicker disabled={disabled} onChange={onDateSelect} />
          {dateSet ? <div className='input-code-success'>Дата сохранена</div> : ''}
        </Item>
      </div>
    </div>
  );
}

export default memo(DateCheckoutForm);

import DatePicker from 'react-date-picker';
import React, { memo } from 'react';
import { Col, Row, Select } from 'antd';
import { useStore } from 'effector-react';
import { CartDto } from '../../../../modules/cart/types';
import { TItem } from '../../../../common/api/types';
import { createOptionsList } from '../../../../common/utils/selectUtils';
import './dateCheckoutForm.less';
import { $orderStore, updateOrderStore } from '../../../../modules/order/model';

// TODO add order time
const options = createOptionsList([
  { id: '18-00', value: '18-00' },
  { id: '18-30', value: '18-30' },
  { id: '19-00', value: '19-00' },
  { id: '19-30', value: '19-30' },
]);

interface Props {
  disabled: boolean;
  cart: TItem<CartDto>;
}

function DateCheckoutForm(props: Props) {
  const { disabled, cart } = props;

  const onDateChange = (date: Date) => {
    updateOrderStore({
      date,
      uuid: cart?.item?.uuid,
      price: cart?.item?.orderSum,
    });
  };

  const onTimeChange = (time: string) => {
    updateOrderStore({
      time,
      uuid: cart?.item?.uuid,
      price: cart?.item?.orderSum,
    });
  };

  const orderStore = useStore($orderStore);

  return (
    <Row gutter={[8, 8]} className="date-order__chekout">
      <Col className="order-options-time__date-select" flex={3}>
        <label>Дата бронирования</label>
        <DatePicker
          disabled={disabled}
          onChange={onDateChange}
          value={orderStore.date}
          minDate={new Date()}
        />
      </Col>
      <Col flex={2}>
        <label>Время бронирования</label>
        <Select
          disabled={disabled}
          style={{ maxWidth: '205px', width: '100%' }}
          onChange={onTimeChange}
          value={orderStore.time}
        >
          {options}
        </Select>
      </Col>
    </Row>
  );
}

export default memo(DateCheckoutForm);

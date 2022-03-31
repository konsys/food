import { Spin } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { OrderModel } from '../../../store';

const { ItemGate, $itemStore } = OrderModel;

function OrderCompletedPage() {
  const { uuid } = useParams<{ uuid: string }>();
  useGate(ItemGate, uuid);

  const order = useStore($itemStore);

  return (
    <Spin spinning={order.pending}>
      <div className='container'>Заказ успешно оформлен {JSON.stringify(order)}</div>;
    </Spin>
  );
}

export default memo(OrderCompletedPage);

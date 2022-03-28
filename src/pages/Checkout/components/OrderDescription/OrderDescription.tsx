import TextArea from 'antd/lib/input/TextArea';
import { useStore } from 'effector-react';
import React, { memo } from 'react';
import { $orderStore, updateOrderStore } from '../../../../modules/order/model';

function OrderDescription() {
  const onDescriptionChange = (description: string) => {
    updateOrderStore({ description: description.trimLeft() });
  };

  const order = useStore($orderStore);
  return (
    <div className='confirm-order__description'>
      <label>Пожелания к заказу</label>
      <TextArea onChange={(v) => onDescriptionChange(v.target.value)} value={order.description} />
    </div>
  );
}

export default memo(OrderDescription);

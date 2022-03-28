import TextArea from 'antd/lib/input/TextArea';
import React, { memo } from 'react';

interface Props {}

function OrderDescription(props: Props) {
  const {} = props;

  return (
    <div className='confirm-order__description'>
      <label>Пожелания к заказу</label>
      <TextArea />
    </div>
  );
}

export default memo(OrderDescription);

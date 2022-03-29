import React, { memo } from 'react';

interface Props {}

function OrderCompleted(props: Props) {
  const {} = props;

  return <div>Заказ успешно оформлен</div>;
}

export default memo(OrderCompleted);

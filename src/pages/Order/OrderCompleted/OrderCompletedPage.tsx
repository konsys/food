import React, { memo } from 'react';

interface Props {}

function OrderCompletedPage(props: Props) {
  const {} = props;

  return <div className='container'>Заказ успешно оформлен</div>;
}

export default memo(OrderCompletedPage);

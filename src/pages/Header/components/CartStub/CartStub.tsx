import React, { memo } from 'react';
import './cartStub.less';

interface Props {}

function CartStub(props: Props) {
  const {} = props;

  return <span title="Корзина пуста" className="cart-stub" />;
}

export default memo(CartStub);

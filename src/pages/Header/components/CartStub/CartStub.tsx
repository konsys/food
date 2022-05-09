import React, { memo } from 'react';
import './cartStub.less';

function CartStub() {
  console.log(11111112345356);
  return <div title="Корзина пуста" className="cart-stub" />;
}

export default memo(CartStub);

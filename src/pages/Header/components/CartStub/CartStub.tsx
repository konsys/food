import React, { memo } from 'react';
import './cartStub.less';

function CartStub() {
  return <div title="Корзина пуста" className="cart-stub" />;
}

export default memo(CartStub);

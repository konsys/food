import React, { memo } from 'react';
import './cartStub.less';

interface Props {}

function CartStub(props: Props) {
  const {} = props;

  return (
    <span title="Корзина пуста" className="header-nav-item-link-basket-stub" />
  );
}

export default memo(CartStub);

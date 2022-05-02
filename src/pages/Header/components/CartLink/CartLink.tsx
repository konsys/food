import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TItem } from '../../../../common/api/types';
import { CartDto } from '../../../../modules/cart/types';
import './cartLink.less';

interface Props {
  cart: TItem<CartDto>;
}

function CartLink(props: Props) {
  const { cart } = props;

  return (
    <Link
      to={`/cart/${cart?.item?.uuid}`}
      title="Корзина"
      rel="nofollow"
      className="header-nav-item-link-basket header-nav-item-link-basket_active header-nav-item-link-basket_active-animate"
    >
      <b>{cart?.item?.orderSum} ₽</b>
    </Link>
  );
}

export default memo(CartLink);

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TItem } from '../../../../../common/api/types';
import { CartDto } from '../../../../../modules/cart/types';
import './mobileCartButton.less';

interface Props {
  cart: TItem<CartDto>;
}

function MobileCartButton({ cart }: Props) {
  return (
    <div className="cart-button-shop-mobile">
      {cart?.item ? (
        <Link
          to={`/cart/${cart.item?.uuid}`}
          rel="nofollow"
          title="Оформление заказа"
        >
          Корзина: {cart.item?.orderSum} ₽
        </Link>
      ) : (
        ''
      )}
    </div>
  );
}

export default memo(MobileCartButton);

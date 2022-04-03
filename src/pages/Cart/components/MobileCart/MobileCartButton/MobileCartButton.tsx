import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TItemWithUuid } from '../../../../../common/types';
import { Nullable } from '../../../../../core/types';
import { CartDto } from '../../../../../modules/cart/types';
import './mobileCartButton.less';

interface Props {
  cartOrder: Nullable<TItemWithUuid<CartDto>>;
}

function MobileCart({ cartOrder }: Props) {
  return (
    <div className="cart-button-shop-mobile">
      {cartOrder ? (
        <Link
          to={`/cart/${cartOrder.uuid}`}
          rel="nofollow"
          title="Оформление заказа"
        >
          Корзина: {cartOrder?.orderSum} ₽
        </Link>
      ) : (
        ''
      )}
    </div>
  );
}

export default memo(MobileCart);

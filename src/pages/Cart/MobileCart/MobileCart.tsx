import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TItemWithUuid } from '../../../common/types';
import { Nullable } from '../../../core/types';
import { CartDto } from '../../../modules/cart/types';
import './mobileCart.less';

interface Props {
  cartOrder: Nullable<TItemWithUuid<CartDto>>;
}

function MobileCart({ cartOrder }: Props) {
  console.log(1111111111, cartOrder);
  return (
    <span>
      {cartOrder ? (
        <Link
          to={`/checkout/${cartOrder.uuid}`}
          className='cart-button-shop-mobile'
          rel='nofollow'
          title='Оформление заказа'
        >
          Корзина: {cartOrder?.orderSum} ₽
        </Link>
      ) : (
        ''
      )}
    </span>
  );
}

export default memo(MobileCart);

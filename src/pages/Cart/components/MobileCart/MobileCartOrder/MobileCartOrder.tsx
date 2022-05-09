import React, { memo } from 'react';
import { TItem } from '../../../../../common/api/types';
import { TUuid, TVoidFn } from '../../../../../common/types';
import { CartDto } from '../../../../../modules/cart/types';
import CartComponent from '../CartComponent/CartComponent';

interface Props {
  cart: TItem<CartDto>;
  changeQuantity: (uuid: TUuid, delta: number) => void;
  deleteFromCart: TVoidFn<TUuid>;
}

function MobileCartOrder(props: Props) {
  const { cart, changeQuantity, deleteFromCart } = props;

  return (
    <div className="container">
      <CartComponent
        cart={cart}
        changeQuantity={changeQuantity}
        deleteFromCart={deleteFromCart}
      />
    </div>
  );
}

export default memo(MobileCartOrder);

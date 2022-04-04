import React, { memo } from 'react';
import { TNullableItem } from '../../../../../common/api/types';
import { TUuid, TVoidFn } from '../../../../../common/types';
import { CartDto } from '../../../../../modules/cart/types';
import CartComponent from '../CartComponent/CartComponent';

interface Props {
  cartOrder: TNullableItem<CartDto>;
  changeQuantity: (delta: number) => void;
  deleteFromCart: TVoidFn<TUuid>;
}

function MobileCartOrder(props: Props) {
  const { cartOrder, changeQuantity, deleteFromCart } = props;

  return (
    <div className="container">
      <CartComponent
        cartOrder={cartOrder}
        changeQuantity={changeQuantity}
        deleteFromCart={deleteFromCart}
      />
    </div>
  );
}

export default memo(MobileCartOrder);

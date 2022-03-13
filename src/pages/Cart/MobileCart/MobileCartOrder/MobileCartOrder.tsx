import React, { memo } from 'react';
import { TItemWithUuid, TUuid, TVoidFn } from '../../../../common/types';
import { Nullable } from '../../../../core/types';
import { CartDto } from '../../../../modules/cart/types';
import CartComponent from '../CartComponent/CartComponent';

interface Props {
  cartOrder: Nullable<TItemWithUuid<CartDto>>;
  changeQuantity: (uuid: TUuid, delta: number) => void;
  deleteFromCart: TVoidFn<TUuid>;
}

function MobileCartOrder(props: Props) {
  const { cartOrder, changeQuantity, deleteFromCart } = props;

  return (
    <div className='container'>
      <CartComponent
        cartOrder={cartOrder}
        changeQuantity={changeQuantity}
        deleteFromCart={deleteFromCart}
      />
    </div>
  );
}

export default memo(MobileCartOrder);

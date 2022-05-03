import React, { memo } from 'react';
import { TItem } from '../../../../../common/api/types';
import { TUuid, TVoidFn } from '../../../../../common/types';
import { CartDto } from '../../../../../modules/cart/types';
import { UserDto } from '../../../../../modules/user/types';
import CartComponent from '../CartComponent/CartComponent';

interface Props {
  cartItem: TItem<CartDto>;
  changeQuantity: (uuid: TUuid, delta: number) => void;
  deleteFromCart: TVoidFn<TUuid>;
  user: UserDto;
}

function MobileCartOrder(props: Props) {
  const { cartItem, changeQuantity, deleteFromCart, user } = props;

  return (
    <div className="container">
      <CartComponent
        cartItem={cartItem}
        changeQuantity={changeQuantity}
        deleteFromCart={deleteFromCart}
        user={user}
      />
    </div>
  );
}

export default memo(MobileCartOrder);

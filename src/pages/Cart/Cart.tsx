import React, { memo, useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { TUuid } from '../../common/types';
import { changeOrderQuantity, deleteItemFromCart } from '../../modules/cart/utils';
import { CartModel } from '../../store';
import CartComponent from './MobileCart/CartComponent/CartComponent';

import './cart.less';

const { $itemStore: cartStore } = CartModel;

function Cart() {
  const { item: cartOrder } = useStore(cartStore);

  const changeQuantity = (uuidToChange: TUuid, delta: number) =>
    changeOrderQuantity(cartOrder, uuidToChange, delta);
  const deleteFromCart = (uuidToDelete: TUuid) => deleteItemFromCart(cartOrder, uuidToDelete);

  const [stickyClass, setStickyClass] = useState<string>('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > 76 ? setStickyClass('fixed-cart') : setStickyClass('relative-cart');
    }
  };

  return (
    <div className={`cart-section-wrapper ${stickyClass}`}>
      <CartComponent
        cartOrder={cartOrder}
        changeQuantity={changeQuantity}
        deleteFromCart={deleteFromCart}
      />
    </div>
  );
}

export default memo(Cart);

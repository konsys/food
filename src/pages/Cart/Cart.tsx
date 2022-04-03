import React, { memo, useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { Spin } from 'antd';
import { TUuid } from '../../common/types';
import {
  changeOrderQuantity,
  deleteItemFromCart,
} from '../../modules/cart/utils';
import { CartModel } from '../../store';
import CartComponent from './components/MobileCart/CartComponent/CartComponent';
import CartView from './components/CartView';

const { $itemStore: cartStore } = CartModel;

type Props = {
  sideView?: boolean;
};

function Cart({ sideView }: Props) {
  const { item: cartOrder, pending } = useStore(cartStore);

  const changeQuantity = (uuidToChange: TUuid, delta: number) =>
    changeOrderQuantity(cartOrder, uuidToChange, delta);
  const deleteFromCart = (uuidToDelete: TUuid) =>
    deleteItemFromCart(cartOrder, uuidToDelete);

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
      windowHeight > 76
        ? setStickyClass('fixed-cart')
        : setStickyClass('relative-cart');
    }
  };

  return (
    <Spin spinning={pending}>
      <CartView
        cartOrder={cartOrder}
        changeQuantity={changeQuantity}
        deleteFromCart={deleteFromCart}
        sideView={sideView}
        stickyClass={stickyClass}
      />
    </Spin>
  );
}

export default memo(Cart);

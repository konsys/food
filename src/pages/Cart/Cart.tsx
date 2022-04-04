import React, { memo, useEffect, useState } from 'react';
import { useGate, useStore } from 'effector-react';
import { Spin } from 'antd';
import { Navigate, useParams } from 'react-router-dom';
import {
  changeOrderQuantity,
  deleteItemFromCart,
} from '../../modules/cart/utils';
import { CartModel } from '../../store';
import CartView from './components/CartView';
import { HttpStatus } from '../../common/utils/constants';
import { getClientUuid } from '../../modules/cart/service';
import { TUuid } from '../../common/types';

const { $itemStore: cartStore, ItemGate } = CartModel;

type Props = {
  sideView?: boolean;
};

function Cart({ sideView }: Props) {
  const { item: cartOrder, pending, error } = useStore(cartStore);
  const { uuid } = useParams<{ uuid: TUuid }>();

  useGate(ItemGate, getClientUuid());

  const changeQuantity = (delta: number) =>
    changeOrderQuantity(cartOrder, delta);
  const deleteFromCart = () => deleteItemFromCart(cartOrder);

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
      {error?.statusCode === HttpStatus.NOT_FOUND ? (
        <Navigate
          to={{
            pathname: '/not-found',
            search: `?page=cart&uuid=${uuid}`,
          }}
        />
      ) : (
        <CartView
          cartOrder={cartOrder}
          changeQuantity={changeQuantity}
          deleteFromCart={deleteFromCart}
          sideView={sideView}
          stickyClass={stickyClass}
        />
      )}
    </Spin>
  );
}

export default memo(Cart);

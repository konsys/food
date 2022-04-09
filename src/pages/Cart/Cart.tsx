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
import StandardModal from '../../common/components/modal/StandardModal';

const {
  $itemStore: cartStore,
  ItemGate,
  resetItemError,
  deleteItemFx,
} = CartModel;

type Props = {
  sideView?: boolean;
};

function Cart({ sideView }: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const cartItem = useStore(cartStore);

  const { item: cartOrder, pending, error } = cartItem;
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

  console.log('cartItem cartItem cartItem', cartItem);
  useEffect(() => {
    if (error) {
      setIsModalVisible(true);
    }
  }, [error, setIsModalVisible]);

  const onDelete = async () => {
    if (cartOrder) {
      await deleteItemFx(cartOrder.uuid);
    }
    resetItemError();
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
          cartItem={cartItem}
          changeQuantity={changeQuantity}
          deleteFromCart={deleteFromCart}
          sideView={sideView}
          stickyClass={stickyClass}
        />
      )}
      <StandardModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        onOk={onDelete}
        onCancel={resetItemError}
        text={error?.message ?? ''}
        title="Удалить предыдущий заказ?"
        loading={pending}
      />
    </Spin>
  );
}

export default memo(Cart);

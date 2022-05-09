import React, { memo, useEffect, useState } from 'react';
import { useGate, useStore } from 'effector-react';
import { Spin } from 'antd';
import { Navigate, useParams } from 'react-router-dom';
import {
  addToCart,
  changeOrderQuantity,
  deleteItemFromCart,
} from '../../modules/cart/utils';
import { CartModel } from '../../store';
import CartContentView from './components/CartContentView';
import { HttpStatus } from '../../common/utils/constants';
import { getClientUuid } from '../../modules/cart/service';
import { TUuid } from '../../common/types';
import StandardModal from '../../common/components/Modal/StandardModal';
import { $selectedMenuItemStore } from '../../modules/restaurantMenu/model';

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

  const cart = useStore(cartStore);
  const addedRestaurantItem = useStore($selectedMenuItemStore);

  const { item: cartOrder, pending, error } = cart;
  const { uuid } = useParams<{ uuid: TUuid }>();

  useGate(ItemGate, getClientUuid());

  const changeQuantity = (restaurantMenuUuid: TUuid, delta: number) =>
    changeOrderQuantity(cartOrder, restaurantMenuUuid, delta);

  const deleteFromCart = (restaurantMenuUuid: TUuid) =>
    deleteItemFromCart(cartOrder, restaurantMenuUuid);

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

  useEffect(() => {
    if (error) {
      setIsModalVisible(true);
    }
  }, [error, setIsModalVisible]);

  const onDelete = async () => {
    if (cartOrder) {
      await deleteItemFx(cartOrder.uuid);
      addedRestaurantItem && addToCart(null, addedRestaurantItem);
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
        <CartContentView
          cart={cart}
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

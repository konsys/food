import { Spin } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { memo, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { TUuid } from '../../common/types';
import { HttpStatus } from '../../common/utils/constants';
import { notifyError } from '../../core/errors';
import { TOrder } from '../../modules/order/types';
import { $user } from '../../modules/user/store';
import { pathNames } from '../../routes/paths';
import { CartModel, OrderModel, PromoModel } from '../../store';
import CheckoutForm from './containers/CheckoutForm/CheckoutForm';

const {
  createNewItemFx: createOrderFx,
  $itemStore: orderStore,
  resetItemError: clearOrdeError,
} = OrderModel;
const { $itemStore: cartStore, ItemGate } = CartModel;
const { $itemStore: promoStore } = PromoModel;

function Checkout() {
  const { uuid } = useParams<{ uuid: TUuid }>();
  const navigate = useNavigate();

  useGate(ItemGate, uuid);

  const cart = useStore(cartStore);
  const promo = useStore(promoStore);
  const order = useStore(orderStore);
  const user = useStore($user);

  const createOrder = async (newOrder: Partial<TOrder>) => {
    const { uuid: orderUuid } = await createOrderFx(newOrder);
    navigate(`${pathNames.ORDER_COMPLETED.basePath}/${orderUuid}`);
  };

  useEffect(() => {
    if (order.error) {
      clearOrdeError();
    }
  }, [order, notifyError]);

  return (
    <Spin spinning={cart.pending || order.pending || promo.pending}>
      {cart?.error?.statusCode === HttpStatus.NOT_FOUND ? (
        <Navigate
          to={{
            pathname: '/not-found',
            search: `?page=checkout&uuid=${uuid}`,
          }}
        />
      ) : (
        <CheckoutForm
          cart={cart}
          promo={promo}
          createOrder={createOrder}
          user={user}
        />
      )}
    </Spin>
  );
}

export default memo(Checkout);

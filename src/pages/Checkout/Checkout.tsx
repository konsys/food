import { Spin } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { memo, useEffect } from 'react';
import { useParams, useNavigate, Navigate, useRoutes } from 'react-router-dom';
import { HttpStatus } from '../../common/utils/constants';
import { notifyError } from '../../core/errors';
import { getClientUuid } from '../../modules/cart/service';
import { TOrder } from '../../modules/order/types';
import { pathNames } from '../../routes/paths';
import { CartModel, CodeCheckModel, OrderModel, PromoModel } from '../../store';
import { NotFound } from '../NotFound';
import CheckoutForm from './containers/CheckoutForm/CheckoutForm';

const {
  createItemFx: createOrderFx,
  $itemStore: orderStore,
  clearItemError: clearOrdeError,
} = OrderModel;
const { $itemStore: cartStore, ItemGate } = CartModel;
const { $itemStore: promoStore } = PromoModel;
const {
  createItemWithoutFetchingListFx: createCheckoutCode,
  getItemByFilterFx: getCheckoutCode,
  $itemStore: codeCheckStore,
  ItemGate: CodeCheckGate,
} = CodeCheckModel;

function Checkout() {
  const { uuid } = useParams<{ uuid: string }>();
  const navigate = useNavigate();

  useGate(ItemGate, uuid);
  useGate(CodeCheckGate, getClientUuid());
  useGate(CodeCheckGate, getClientUuid());

  const cart = useStore(cartStore);
  const promo = useStore(promoStore);
  const code = useStore(codeCheckStore);
  const order = useStore(orderStore);

  const createOrder = async (newOrder: Partial<TOrder>) => {
    const { uuid: orderUuid } = await createOrderFx(newOrder);
    navigate(`${pathNames.ORDER_COMPLETED.basePath}/${orderUuid}`);
  };

  const router = useParams();

  useEffect(() => {
    if (order.error) {
      notifyError(order.error.message);
      clearOrdeError();
    }
  }, [order, notifyError]);

  return (
    <Spin
      spinning={cart.pending || order.pending || code.pending || promo.pending}
    >
      {cart?.error?.statusCode === HttpStatus.NOT_FOUND ? (
        <Navigate
          to={{
            pathname: '/not-found',
            search: `?page=cart&uuid=${uuid}`,
          }}
        />
      ) : (
        <CheckoutForm
          code={code}
          cart={cart}
          promo={promo}
          createCheckoutCode={createCheckoutCode}
          getCheckoutCode={getCheckoutCode}
          createOrder={createOrder}
        />
      )}
    </Spin>
  );
}

export default memo(Checkout);

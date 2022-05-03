import { Spin } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { memo, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { TUuid } from '../../common/types';
import { HttpStatus } from '../../common/utils/constants';
import { notifyError } from '../../core/errors';
import { getClientUuid } from '../../modules/cart/service';
import { TOrder } from '../../modules/order/types';
import { $user } from '../../modules/user/store';
import { pathNames } from '../../routes/paths';
import { CartModel, CodeCheckModel, OrderModel, PromoModel } from '../../store';
import CheckoutForm from './containers/CheckoutForm/CheckoutForm';

const {
  createNewItemFx: createOrderFx,
  $itemStore: orderStore,
  resetItemError: clearOrdeError,
} = OrderModel;
const { $itemStore: cartStore, ItemGate } = CartModel;
const { $itemStore: promoStore } = PromoModel;
const {
  createNewItemFx: createCheckoutCode,
  getItemByFilterFx: getCheckoutCode,
  $itemStore: codeCheckStore,
  ItemGate: CodeCheckGate,
} = CodeCheckModel;

function Checkout() {
  const { uuid } = useParams<{ uuid: TUuid }>();
  const navigate = useNavigate();

  useGate(ItemGate, uuid);
  useGate(CodeCheckGate, getClientUuid());
  useGate(CodeCheckGate, getClientUuid());

  const cart = useStore(cartStore);
  const promo = useStore(promoStore);
  const code = useStore(codeCheckStore);
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
    <Spin
      spinning={cart.pending || order.pending || code.pending || promo.pending}
    >
      {cart?.error?.statusCode === HttpStatus.NOT_FOUND ? (
        <Navigate
          to={{
            pathname: '/not-found',
            search: `?page=checkout&uuid=${uuid}`,
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
          user={user}
        />
      )}
    </Spin>
  );
}

export default memo(Checkout);

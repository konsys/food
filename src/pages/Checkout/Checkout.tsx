import { Spin } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getClientUuid } from '../../modules/cart/service';
import { OrderDto } from '../../modules/order/types';
import { pathNames } from '../../routes/paths';
import { CartModel, CodeCheckModel, OrderModel, PromoModel } from '../../store';
import CheckoutForm from './containers/CheckoutForm/CheckoutForm';

const { createItemFx: createOrderFx, $itemStore: orderStore } = OrderModel;
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
  useGate(ItemGate, uuid);

  const cart = useStore(cartStore);
  const promo = useStore(promoStore);
  const code = useStore(codeCheckStore);
  const order = useStore(orderStore);

  const navigate = useNavigate();

  useGate(CodeCheckGate, getClientUuid());
  useGate(CodeCheckGate, getClientUuid());

  const createOrder = async (order: Partial<OrderDto>) => {
    const { uuid: orderUuid } = await createOrderFx(order);
    navigate(`${pathNames.ORDER_COMPLETED.basePath}/${orderUuid}`);
  };

  return (
    <Spin spinning={cart.pending || order.pending || code.pending || promo.pending}>
      <CheckoutForm
        code={code}
        cart={cart}
        promo={promo}
        createCheckoutCode={createCheckoutCode}
        getCheckoutCode={getCheckoutCode}
        createOrder={createOrder}
      />
    </Spin>
  );
}

export default memo(Checkout);

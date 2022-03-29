import { useGate, useStore } from 'effector-react';
import React, { memo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getClientUuid } from '../../modules/cart/service';
import { OrderDto } from '../../modules/order/types';
import { pathNames, paths } from '../../routes/paths';
import { CartModel, CodeCheckModel, OrderModel, PromoModel } from '../../store';
import CheckoutForm from './containers/CheckoutForm/CheckoutForm';

const { createItemFx: createOrderFx } = OrderModel;
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

  const navigate = useNavigate();

  const [isPhoneConfirmed, setIsPhoneConfirmed] = useState<boolean>(false);

  useGate(CodeCheckGate, getClientUuid());
  useGate(CodeCheckGate, getClientUuid());

  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [isWrongCode, setIsWrongCode] = useState<boolean>(true);

  const createOrder = async (order: Partial<OrderDto>) => {
    const { uuid } = await createOrderFx(order);
    navigate(`${pathNames.ORDER_COMPLETED.basePath}/${uuid}`);
  };

  return (
    <CheckoutForm
      code={code}
      cart={cart}
      isPhoneConfirmed={isPhoneConfirmed}
      setIsPhoneConfirmed={setIsPhoneConfirmed}
      promo={promo}
      createCheckoutCode={createCheckoutCode}
      getCheckoutCode={getCheckoutCode}
      isCodeSent={isCodeSent}
      isWrongCode={isWrongCode}
      setIsCodeSent={setIsCodeSent}
      setIsWrongCode={setIsWrongCode}
      createOrder={createOrder}
    />
  );
}

export default memo(Checkout);

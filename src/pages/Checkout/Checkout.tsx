import { useGate, useStore } from 'effector-react';
import React, { memo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartModel, PromoModel } from '../../store';
import CheckoutForm from './containers/CheckoutForm/CheckoutForm';

const { $itemStore, ItemGate } = CartModel;
const { $itemStore: promoStore } = PromoModel;
function Checkout() {
  const { uuid } = useParams<{ uuid: string }>();
  useGate(ItemGate, uuid);
  const { item } = useStore($itemStore);
  const { item: promo } = useStore(promoStore);

  const [isPhoneConfirmed, setIsPhoneConfirmed] = useState<boolean>(false);

  return (
    <CheckoutForm
      item={item}
      isPhoneConfirmed={isPhoneConfirmed}
      setIsPhoneConfirmed={setIsPhoneConfirmed}
      promo={promo}
    />
  );
}

export default memo(Checkout);

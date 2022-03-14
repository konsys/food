import { useGate, useStore } from 'effector-react';
import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { CartModel } from '../../store';
import CheckoutMobile from './containers/CheckoutMobile/CheckoutMobile';

const { $itemStore, ItemGate } = CartModel;
function Checkout() {
  const { uuid } = useParams<{ uuid: string }>();
  useGate(ItemGate, uuid);
  const { item } = useStore($itemStore);

  return <CheckoutMobile item={item} />;
}

export default memo(Checkout);

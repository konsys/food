import { useGate, useStore } from 'effector-react';
import React, { memo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { getClientUuid } from '../../modules/cart/service';
import { TCheckoutForm } from '../../modules/checkout/types';
import { CodeCheckDto } from '../../modules/codeCheck/types';
import { CartModel, CodeCheckModel, PromoModel } from '../../store';
import CheckoutForm from './containers/CheckoutForm/CheckoutForm';

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

  const [isPhoneConfirmed, setIsPhoneConfirmed] = useState<boolean>(false);

  useGate(CodeCheckGate, getClientUuid());
  useGate(CodeCheckGate, getClientUuid());

  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [isWrongCode, setIsWrongCode] = useState<boolean>(true);

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
    />
  );
}

export default memo(Checkout);

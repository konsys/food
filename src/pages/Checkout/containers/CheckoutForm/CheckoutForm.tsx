import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';
import { TItemWithUuid, TPromiseFn, TVoidFn } from '../../../../common/types';
import PhoneCheckoutForm from '../PhoneCheckoutForm/PhoneCheckoutForm';
import AddressCheckoutForm from '../AddressCheckoutForm/AddressCheckoutForm';
import PromoCodeCheckoutForm from '../PromoCodeCheckoutForm/PromoCodeCheckoutForm';
import DateCheckoutForm from '../DateCheckoutForm/DateCheckoutForm';
import PaymentsCheckoutForm from '../PaymentsCheckoutForm/PaymentsCheckoutForm';
import { PromoDto } from '../../../../modules/promo/types';
import { CodeCheckDto } from '../../../../modules/codeCheck/types';
import { TItem } from '../../../../common/api/types';
import { CartDto } from '../../../../modules/cart/types';

import './checkoutForm.less';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { OrderDto } from '../../../../modules/order/types';
import { TCreateItemFx } from '../../../../common/models/abstractModel/abstractCrudModel';
import OrderDescription from '../../components/OrderDescription/OrderDescription';

interface Props {
  cart: TItem<CartDto>;
  code: TItem<CodeCheckDto>;
  promo: TItem<PromoDto>;
  setIsPhoneConfirmed: TVoidFn<boolean>;
  isPhoneConfirmed: boolean;
  setIsWrongCode: TVoidFn<boolean>;
  setIsCodeSent: TVoidFn<boolean>;
  getCheckoutCode: TPromiseFn<Partial<CodeCheckDto>, Partial<CodeCheckDto>>;
  createCheckoutCode: TPromiseFn<Partial<CodeCheckDto>, Partial<CodeCheckDto>>;
  isCodeSent: boolean;
  isWrongCode: boolean;
}

function CheckoutForm({
  cart,
  code,
  setIsPhoneConfirmed,
  isPhoneConfirmed,
  promo,
  setIsWrongCode,
  setIsCodeSent,
  getCheckoutCode,
  createCheckoutCode,
  isCodeSent,
  isWrongCode,
}: Props) {
  const cartItem = cart?.item;
  const { Form: PhoneForm, formInstance: phoneInstanceForm } = useValidatedForm<CodeCheckDto>();

  return (
    <section className='ordering__mobile'>
      <div className='container ordering-form__container'>
        <section className='ordering-form'>
          <div className='page-title page-title--checkout'>
            <h2>Оформление заказа</h2>
          </div>

          {/* PHONE --------------------------- */}
          <PhoneForm>
            <PhoneCheckoutForm
              setIsPhoneConfirmed={setIsPhoneConfirmed}
              isPhoneConfirmed={isPhoneConfirmed}
              formInstance={phoneInstanceForm}
              code={code}
              setIsWrongCode={setIsWrongCode}
              setIsCodeSent={setIsCodeSent}
              getCheckoutCode={getCheckoutCode}
              createCheckoutCode={createCheckoutCode}
              isCodeSent={isCodeSent}
              isWrongCode={isWrongCode}
            />
          </PhoneForm>

          {/* ADDRESS --------------------------- */}

          <AddressCheckoutForm disabled={!isPhoneConfirmed} />

          {/* TIME --------------------------- */}
          <div className='ordering-form__time'>
            <DateCheckoutForm disabled={!isPhoneConfirmed} cart={cart} />
          </div>
          <div className='ordering-form__time'>
            <PromoCodeCheckoutForm disabled={!isPhoneConfirmed} />
          </div>
          <PaymentsCheckoutForm />

          <div className='ordering-form__finish'>
            <div className='container'>
              <div className='order-finish__wrapper'>
                <OrderDescription />
                <div className='order-finish'>
                  <div className='order-finish__item order-finish__item--total'>
                    <div className='order-finish__title'>Итого</div>
                    <div className='order-finish__value'>
                      <span className='cart-price-total'>
                        {(cartItem?.orderSum || 0) -
                          ((cartItem?.orderSum || 0) / 100) * (promo?.item?.percentDiscount || 0)}
                        <span className='cart-price-total__money-sign'>₽</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className='confirm-order'>
                  <button type='button' className='confirm-order__button' title='Оформить заказ'>
                    Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <input type='hidden' name='user-point' />
          <input type='hidden' data-value-url className='data-url' />
        </section>
      </div>
    </section>
  );
}

export default memo(CheckoutForm);

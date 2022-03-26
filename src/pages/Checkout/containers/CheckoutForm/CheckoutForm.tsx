import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TPromiseFn, TVoidFn } from '../../../../common/types';
import { Nullable } from '../../../../core/types';
import { CartDto } from '../../../../modules/cart/types';
import PhoneCheckoutForm from '../PhoneCheckoutForm/PhoneCheckoutForm';
import AddressCheckoutForm from '../AddressCheckoutForm/AddressCheckoutForm';
import PromoCodeCheckoutForm from '../PromoCodeCheckoutForm/PromoCodeCheckoutForm';
import DateCheckoutForm from '../DateCheckoutForm/DateCheckoutForm';
import PaymentsCheckoutForm from '../PaymentsCheckoutForm/PaymentsCheckoutForm';
import { PromoDto } from '../../../../modules/promo/types';

import './checkoutForm.less';
import { CodeCheckDto } from '../../../../modules/codeCheck/types';
import { TItem } from '../../../../common/api/types';

interface Props {
  cart: TItem<CartDto>;
  code: TItem<CodeCheckDto>;
  promo: TItem<PromoDto>;
  setIsPhoneConfirmed: TVoidFn<boolean>;
  isPhoneConfirmed: boolean;
  formInstance: any;
  setIsWrongCode: TVoidFn<boolean>;
  setIsCodeSent: TVoidFn<boolean>;
  getCheckCode: TPromiseFn<Partial<CodeCheckDto>, Partial<CodeCheckDto>>;
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
  formInstance,
  setIsWrongCode,
  setIsCodeSent,
  getCheckCode,
  createCheckoutCode,
  isCodeSent,
  isWrongCode,
}: Props) {
  const cartItem = cart?.item;
  return (
    <section className='ordering__mobile'>
      <div className='container ordering-form__container'>
        <section className='ordering-form'>
          <div className='page-title page-title--checkout'>
            <h2>Оформление заказа</h2>
          </div>

          {/* PHONE --------------------------- */}

          <PhoneCheckoutForm
            setIsPhoneConfirmed={setIsPhoneConfirmed}
            isPhoneConfirmed={isPhoneConfirmed}
            formInstance={formInstance}
            code={code}
            setIsWrongCode={setIsWrongCode}
            setIsCodeSent={setIsCodeSent}
            getCheckCode={getCheckCode}
            createCheckoutCode={createCheckoutCode}
            isCodeSent={isCodeSent}
            isWrongCode={isWrongCode}
          />

          {/* ADDRESS --------------------------- */}
          <AddressCheckoutForm disabled={!isPhoneConfirmed} />

          {/* TIME --------------------------- */}
          <div className='ordering-form__time'>
            <DateCheckoutForm disabled={!isPhoneConfirmed} />
          </div>
          <div className='ordering-form__time'>
            <PromoCodeCheckoutForm disabled={!isPhoneConfirmed} />
          </div>
          <PaymentsCheckoutForm />

          <div className='ordering-form__finish'>
            <div className='container'>
              <div className='order-finish__wrapper'>
                <div className='order-finish'>
                  <div className='order-finish__item'>
                    <div className='order-finish__title'>Время доставки</div>
                    <div className='order-finish__value'>50-60 мин </div>
                  </div>
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
                  <div className='order-finish__item'>
                    <div className='order-finish__title'>Приборы</div>
                    <div className='order-finish__value'>
                      <div className='order-options-guests-numbers-nav quantity-nav'>
                        <span>
                          <svg
                            width={18}
                            height={2}
                            viewBox='0 0 18 2'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <rect width={18} height='1.4' fill='#F37021' />
                          </svg>
                        </span>
                        <div>1</div>
                        <span>
                          <svg
                            width={18}
                            height={18}
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <rect y='8.09985' width={18} height='1.38462' fill='#F37021' />
                            <rect
                              x='9.69019'
                              width={18}
                              height='1.38462'
                              transform='rotate(90 9.69019 0)'
                              fill='#F37021'
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='confirm-order'>
                  <Link
                    to='/confirm-order/123456789'
                    className=' confirm-order__disabled'
                    title='Оформить заказ'
                  >
                    Оформить заказ
                  </Link>
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

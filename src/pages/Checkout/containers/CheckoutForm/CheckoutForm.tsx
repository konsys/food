import { DatePicker, Radio, TimePicker } from 'antd';
import React, { memo } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { TItemWithUuid, TVoidFn } from '../../../../common/types';
import { Nullable } from '../../../../core/types';
import { CartDto } from '../../../../modules/cart/types';

import PhoneCheckoutForm from '../PhoneCheckoutForm/PhoneCheckoutForm';

import './checkoutForm.less';
import AddressCheckoutForm from '../AddressCheckoutForm/AddressCheckoutForm';
import PromocodeCheckoutForm from '../PromocodeCheckoutForm/PromocodeCheckoutForm';
import DateCheckoutForm from '../DateCheckoutForm/DateCheckoutForm';
import PaymentsCheckoutForm from '../PaymentsCheckoutForm/PaymentsCheckoutForm';

interface Props {
  item: Nullable<TItemWithUuid<CartDto>>;
  setIsPhoneConfirmed: TVoidFn<boolean>;
  isPhoneConfirmed: boolean;
}

function CheckoutForm({ item, setIsPhoneConfirmed, isPhoneConfirmed }: Props) {
  return (
    <section className='ordering__mobile'>
      <div className='container ordering-form__container'>
        <section className='ordering-form'>
          <div className='page-title page-title--checkout'>
            <h2>Оформление заказа {item?.orderSum}</h2>
          </div>

          {/* PHONE --------------------------- */}

          <PhoneCheckoutForm
            setIsPhoneConfirmed={setIsPhoneConfirmed}
            isPhoneConfirmed={isPhoneConfirmed}
          />

          {/* ADDRESS --------------------------- */}
          <AddressCheckoutForm />

          {/* TIME --------------------------- */}
          <div className='ordering-form__time'>
            <DateCheckoutForm />
          </div>
          <div className='ordering-form__time'>
            <PromocodeCheckoutForm />
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
                      <span className='cart-price-total'>380 ₽</span>
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

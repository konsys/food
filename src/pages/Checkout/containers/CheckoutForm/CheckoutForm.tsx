import { Radio, Select } from 'antd';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TItemWithUuid, TSelectOptions } from '../../../../common/types';
import { Nullable } from '../../../../core/types';
import { CartDto } from '../../../../modules/cart/types';
import { createOptionsList } from '../../../../common/utils/selectUtils';
import PhoneCheckForm from '../PhoneCheckForm/PhoneCheckForm';

import './checkoutForm.less';

const deliveryOptions: TSelectOptions = [
  {
    id: 'wefwef',
    value: 'Сейчас',
  },
  {
    id: '',
    value: '20:15',
  },
  {
    id: '',
    value: '20:30',
  },
  {
    id: '',
    value: '20:45',
  },
  {
    id: '',
    value: '21:00',
  },
  {
    id: '',
    value: '21:15',
  },
];

interface Props {
  item: Nullable<TItemWithUuid<CartDto>>;
}

function CheckoutForm({ item }: Props) {
  return (
    <section className='ordering__mobile'>
      <div className='container ordering-form__container'>
        <section className='ordering-form'>
          <div className='page-title page-title--checkout'>
            <h2>Оформление заказа {item?.orderSum}</h2>
          </div>

          {/* PHONE --------------------------- */}

          <PhoneCheckForm />

          {/* ADDRESS --------------------------- */}
          <div className='ordering-form__address address ordering-form__item--disabled'>
            <div className='address__title'>
              <span>Мои адреса</span>
              <button className='address__update-button' disabled type='button'>
                <svg
                  width={12}
                  height={12}
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect y='5.53845' width={12} height='0.923077' fill='#F37021' />
                  <rect
                    x='6.46155'
                    width={12}
                    height='0.923077'
                    transform='rotate(90 6.46155 0)'
                    fill='#F37021'
                  />
                </svg>
                Добавить новый адрес
              </button>
            </div>
            <ul className='custom-input-buttons address__list' data-validate-address />
          </div>

          {/* TIME --------------------------- */}
          <div className='ordering-form__time ordering-form__item--disabled'>
            <div className='ordering-form__time--input'>
              <label>Время доставки</label>
              <div className='order-options-time'>
                <Select style={{ width: '100%' }}>{createOptionsList(deliveryOptions)}</Select>
              </div>
            </div>
            <div className='form-checkout-promocode'>
              <label htmlFor='order-promocode'>Промокод</label>
              <input
                type='text'
                name='promocode'
                disabled
                className='form-checkout-promocode__input'
              />
              <div className='form-checkout-promocode__button-wrapper'>
                <button
                  className='form-checkout-promocode__button'
                  data-cancel='false'
                  disabled
                  type='button'
                >
                  Применить
                </button>
              </div>
              <div className='input-promocode-error'>Неверный промокод</div>
            </div>
          </div>
          <div className='ordering-form__payments'>
            <div className='page-title page-title--checkout'>
              <h2>Оплата</h2>
            </div>
            <div className='custom-input-buttons'>
              <Radio.Group onChange={() => null} value={1}>
                <Radio value={1}>Картой онлайн</Radio>
              </Radio.Group>

              <span className='ordering-form__payments--info'>
                Мы заблокируем средства и спишем после завершения заказа.
              </span>
            </div>
            <input type='hidden' name='binding_id' />
          </div>
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

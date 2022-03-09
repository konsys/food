import React, { memo } from 'react';

import './checkout.less';

interface Props {}

function Checkout(props: Props) {
  const {} = props;

  return (
    <div className='container'>
      <form action='#' className='ordering-form' name='form' style={{ display: 'block' }}>
        <div className='page-title page-title--checkout'>
          <h2>Оформление заказа</h2>
        </div>
        <div className='ordering-form__phone'>
          <div className='input-phone-wrapper'>
            <label htmlFor='order-phone'>Телефон</label>
            <input
              type='tel'
              name='phone'
              id='order-phone'
              className='input-mask-phone input-mask-phone--anon'
              placeholder='+7 (999) 123-45-67'
            />
            <div className='ordering-form__phone-info'>
              Вы сможете отправить код еще раз через
              <span className='code_mins'>1</span>
              <span>:</span>
              <span className='code_secs'>00</span>
            </div>
            <div className='input-phone-wrapper--ok' />
          </div>
          <div id='recaptcha'>
            <div style={{ width: '304px', height: '78px' }}>
              <textarea
                id='g-recaptcha-response'
                name='g-recaptcha-response'
                className='g-recaptcha-response'
                style={{
                  width: '250px',
                  height: '40px',
                  border: '1px solid rgb(193, 193, 193)',
                  margin: '10px 25px',
                  padding: '0px',
                  resize: 'none',
                  display: 'none',
                }}
              />
            </div>
          </div>
          <div className='check-oh-hidden'>
            <label>&nbsp;</label>
            <button className='order-form-send-code' disabled type='button'>
              Получить код
            </button>
          </div>
          <div className='check-oh-hidden'>
            <label htmlFor='sms-code' className='label-sms-code'>
              Код из СМС
            </label>
            <input type='tel' name='code' id='sms-code' className='order-form-sms-code' disabled />
            <div className='input-code-error'>Неверный код</div>
          </div>
        </div>
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
        <div className='ordering-form__time ordering-form__item--disabled'>
          <div>
            <label>Время доставки</label>
            <div className='order-options-time'>
              <a
                href='/'
                className='order-options-time-dropdown-select'
                title='Сейчас'
                data-slot-key='asap'
              >
                Сейчас{' '}
              </a>
              <div className='order-options-time-dropdown'>
                <ul className='order-options-time-dropdown-items-scroll list-clear ps'>
                  <li>
                    <a href='/' data-slot-key='asap'>
                      Сейчас{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646846100}>
                      20:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646847000}>
                      20:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646847900}>
                      20:45{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646848800}>
                      21:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646849700}>
                      21:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646850600}>
                      21:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646899200}>
                      Завтра в 11:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646900100}>
                      Завтра в 11:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646901000}>
                      Завтра в 11:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646901900}>
                      Завтра в 11:45{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646902800}>
                      Завтра в 12:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646903700}>
                      Завтра в 12:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646904600}>
                      Завтра в 12:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646905500}>
                      Завтра в 12:45{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646906400}>
                      Завтра в 13:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646907300}>
                      Завтра в 13:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646908200}>
                      Завтра в 13:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646909100}>
                      Завтра в 13:45{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646910000}>
                      Завтра в 14:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646910900}>
                      Завтра в 14:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646911800}>
                      Завтра в 14:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646912700}>
                      Завтра в 14:45{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646913600}>
                      Завтра в 15:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646914500}>
                      Завтра в 15:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646915400}>
                      Завтра в 15:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646916300}>
                      Завтра в 15:45{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646917200}>
                      Завтра в 16:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646918100}>
                      Завтра в 16:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646919000}>
                      Завтра в 16:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646919900}>
                      Завтра в 16:45{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646920800}>
                      Завтра в 17:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646921700}>
                      Завтра в 17:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646922600}>
                      Завтра в 17:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646923500}>
                      Завтра в 17:45{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646924400}>
                      Завтра в 18:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646925300}>
                      Завтра в 18:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646926200}>
                      Завтра в 18:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646927100}>
                      Завтра в 18:45{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646928000}>
                      Завтра в 19:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646928900}>
                      Завтра в 19:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646929800}>
                      Завтра в 19:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646930700}>
                      Завтра в 19:45{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646931600}>
                      Завтра в 20:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646932500}>
                      Завтра в 20:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646933400}>
                      Завтра в 20:30{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646934300}>
                      Завтра в 20:45{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646935200}>
                      Завтра в 21:00{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646936100}>
                      Завтра в 21:15{' '}
                    </a>
                  </li>
                  <li>
                    <a href='/' data-slot-key={1646937000}>
                      Завтра в 21:30{' '}
                    </a>
                  </li>
                  <div className='ps__rail-x' style={{ left: '0px', bottom: '0px' }}>
                    <div className='ps__thumb-x' style={{ left: '0px', width: '0px' }} />
                  </div>
                  <div className='ps__rail-y' style={{ top: '0px', right: '0px' }}>
                    <div className='ps__thumb-y' style={{ top: '0px', height: '0px' }} />
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className='form-checkout-promocode'>
            <label htmlFor='order-promocode'>Промокод</label>
            <input
              type='text'
              id='order-promocode'
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
            <div className='input-promocode-error' style={{ display: 'none' }} />
          </div>
        </div>
        <div className='ordering-form__payments ordering-form__item--disabled'>
          <div className='page-title page-title--checkout'>
            <h2>Оплата</h2>
          </div>
          <ul className='custom-input-buttons'>
            <li>
              <input
                type='radio'
                defaultValue='card-online'
                disabled
                id='payment-card-online'
                name='payment'
              />
              <label htmlFor='payment-card-online'>
                Картой онлайн.{' '}
                <span>Мы заблокируем средства и спишем после завершения заказа.</span>
              </label>
            </li>
            <li style={{ display: 'none' }}>
              <input
                type='radio'
                defaultValue='apple-pay'
                disabled
                id='payment-apple-pay'
                name='payment'
              />
              <label htmlFor='payment-apple-pay'>
                Apple Pay <span />
              </label>
            </li>
          </ul>
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
                  <div className='order-finish__title hidden-xs'>Количество приборов</div>
                  <div className='order-finish__title hidden-lg hidden-md hidden-sm'>Приборы</div>
                  <div className='order-finish__value'>
                    <div className='order-options-guests-numbers-nav quantity-nav'>
                      <span data-change='minus'>
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
                      <span data-change='plus'>
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
              <a href='/' className='peach-btn confirm-order disabled' title='Оформить заказ'>
                Оформить заказ
              </a>
              <div className='apple-pay-button-with-text apple-pay-button-black-with-text'>
                <span className='text'>Оплатить с Apple Pay</span>
                <span className='logo' />
              </div>
            </div>
          </div>
        </div>
        <input type='hidden' name='user-point' id='input-geo-point' />
        <input type='hidden' data-value-url className='data-url' />
      </form>
    </div>
  );
}

export default memo(Checkout);

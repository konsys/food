import React, { memo } from 'react';
import './cart.less';

interface Props {}

function Cart(props: Props) {
  const {} = props;

  return (
    <div className='cart-section-wrapper hidden-xs hidden-sm'>
      <div className='cart-section' style={{ position: 'relative', top: 'auto', bottom: 'auto' }}>
        <div className='cart-section__title'>Корзина</div>
        <section>
          <div className='cart-service__overlay' style={{ display: 'none' }} />
          <ul className='cart-service__list list-clear ps'>
            <li className='cart-service'>
              <div className='cart-section__info'>
                Стоимость доставки
                <br />
                будет известна после
                <br />
                <a href='/' title='указания адреса'>
                  указания адреса
                </a>
              </div>
            </li>
            <div className='ps__rail-x' style={{ left: 0, bottom: 0 }}>
              <div className='ps__thumb-x' style={{ left: 0, width: 0 }} />
            </div>
            <div className='ps__rail-y' style={{ top: 0, right: 0 }}>
              <div className='ps__thumb-y' style={{ top: 0, height: 0 }} />
            </div>
          </ul>
          <div className='cart-bottom'>
            <a
              href='/checkout/'
              className='cart-bottom__checkout-button cart-bottom__checkout-button--empty cart-bottom__checkout-button--disabled'
              title='Оформить заказ'
              rel='nofollow'
            >
              <span>Оформить заказ</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default memo(Cart);

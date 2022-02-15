import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './cart.less';

interface Props {}

function Cart(props: Props) {
  const {} = props;

  return (
    <div className='cart-section-wrapper'>
      <div className='cart-section__body'>
        <div className='cart-section d-flex flex-column'>
          <div className='cart-section__title'>Корзина</div>
          <div>
            <div className='cart-service'>
              <div className='cart-section__info'>
                Стоимость доставки
                <br />
                будет известна после
                <br />
                <a href='/' title='указания адреса'>
                  указания адреса
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='cart-bottom'>
          <Link
            to='/checkout'
            className='cart-bottom__checkout-button d-flex align-items-center justify-content-center'
            title='Оформить заказ'
            rel='nofollow'
          >
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(Cart);

import { useGate, useStore } from 'effector-react';
import React, { memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSessionUuid } from '../../modules/cart/service';
import { CartModel } from '../../store';
import './cart.less';
import CartItem from './CartItem/CartItem';

const { $itemStore, ItemGate } = CartModel;

function Cart() {
  const sessionUuid = getSessionUuid();

  useGate(ItemGate, sessionUuid);

  const cart = useStore($itemStore);

  console.log(cart);
  return (
    <div className='cart-section-wrapper'>
      <div className='cart-section__body'>
        <div className='cart-section d-flex flex-column'>
          <div className='cart-section__title'>Корзина</div>
          <div className='cart-service'>
            <div className='cart-service__title cart-service__title--delivery'>
              <div className='cart-service__price cart-service__price--delivery'>
                <span>0</span> ₽
              </div>
              <div className='cart-service__name'>
                Доставка от Broniboy
                <i className='delivery_type_cart delivery_type--default'>
                  <img
                    src='https://broniboy.ru/img/icons/delivery/default.svg'
                    alt='Доставка от Broniboy'
                  />
                </i>
              </div>
              <div className='cart-service__description cart-service__description--delivery'>
                Закажите еще на 150₽ для бесплатной доставки.
              </div>
              <div className='cart-service__description'>
                Ваш заказ будет быстро доставлен курьерами Broniboy. Мы гарантируем скорость и
                качество доставки.
              </div>
            </div>
          </div>
          <div className='cart-service__list'>
            {new Array(20).fill('wef').map((v, k) => (
              <CartItem key={k} />
            ))}
          </div>
        </div>
        <div className='cart-bottom'>
          <div className='cart-bottom__info'>
            <div>
              Время доставки <span>55-65 мин</span>
            </div>
            <div className='cart-bottom__total'>
              Итого <span>1 190 ₽</span>
            </div>
          </div>

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

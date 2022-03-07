import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartDto } from '../../modules/cart/types';
import CartItem from './CartItem/CartItem';
import { TItemWithUuid, TUuid, TVoidFn } from '../../common/types';
import { Nullable } from '../../core/types';
import './cart.less';

type Props = {
  cartOrder: Nullable<TItemWithUuid<CartDto>>;
  changeQuantity: (uuid: TUuid, delta: number) => void;
  deleteFromCart: TVoidFn<TUuid>;
};

function Cart(props: Props) {
  const { cartOrder, changeQuantity, deleteFromCart } = props;

  const [stickyClass, setStickyClass] = useState<string>('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > 76 ? setStickyClass('fixed-cart') : setStickyClass('relative-cart');
    }
  };

  return (
    <div className={`cart-section-wrapper ${stickyClass}`}>
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
            {cartOrder?.order?.map((v, k) => (
              <CartItem
                key={k}
                item={v.restaurantMenu}
                quiantity={v.quantity}
                changeQuantity={changeQuantity}
                deleteFromCart={deleteFromCart}
              />
            ))}
          </div>
        </div>
        <div className='cart-bottom'>
          <div className='cart-bottom__info'>
            <div>
              Время доставки <span>55-65 мин</span>
            </div>
            <div className='cart-bottom__total'>
              Итого <span>{cartOrder?.orderSum} ₽</span>
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

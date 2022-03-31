import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TItemWithUuid, TUuid, TVoidFn } from '../../../../common/types';
import { Nullable } from '../../../../core/types';
import { CartDto } from '../../../../modules/cart/types';
import CartItem from '../../CartItem/CartItem';

import './cartComponent.less';

interface Props {
  cartOrder: Nullable<TItemWithUuid<CartDto>>;
  changeQuantity: (uuid: TUuid, delta: number) => void;
  deleteFromCart: TVoidFn<TUuid>;
}

function CartComponent(props: Props) {
  const { cartOrder, changeQuantity, deleteFromCart } = props;

  return (
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
                <img src='http://localhost:8000/img/icons/default.svg' alt='Доставка от Broniboy' />
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
          <div className='cart-bottom__total'>
            Итого <span>{cartOrder?.orderSum || 0} ₽</span>
          </div>
        </div>

        {cartOrder?.orderSum ? (
          <div className='cart-bottom__checkout-button'>
            <Link to={`/checkout/${cartOrder?.uuid}`} title='Оформить заказ' rel='nofollow'>
              Оформить заказ
            </Link>
          </div>
        ) : (
          <div className='cart-bottom__checkout-button--disabled'>Корзина пуста</div>
        )}
      </div>
    </div>
  );
}

export default memo(CartComponent);

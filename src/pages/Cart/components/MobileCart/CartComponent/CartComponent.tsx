import { Col, Row } from 'antd';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TItem } from '../../../../../common/api/types';
import { TUuid, TVoidFn } from '../../../../../common/types';
import { CartDto } from '../../../../../modules/cart/types';
import CartItem from '../../CartItem/CartItem';

import './cartComponent.less';

interface Props {
  cartItem: TItem<CartDto>;
  changeQuantity: (uuid: TUuid, delta: number) => void;
  deleteFromCart: TVoidFn<TUuid>;
}

function CartComponent(props: Props) {
  const { cartItem, changeQuantity, deleteFromCart } = props;

  return (
    <div className="cart-section__body">
      <div className="cart-section d-flex flex-column">
        <div className="cart-section__title">Корзина</div>
        <div className="cart-service">
          <div className="cart-service__title cart-service__title--delivery">
            <div className="cart-service__price cart-service__price--delivery">
              <span>0</span> ₽
            </div>
            <div className="cart-service__name">
              Доставка от Broniboy
              <i className="delivery_type_cart delivery_type--default">
                <img
                  src="http://localhost:8000/img/icons/default.svg"
                  alt="Доставка от Broniboy"
                />
              </i>
            </div>
            <div className="cart-service__description cart-service__description--delivery">
              Закажите еще на 150₽ для бесплатной доставки.
            </div>
            <div className="cart-service__description">
              Ваш заказ будет быстро доставлен курьерами Broniboy. Мы
              гарантируем скорость и качество доставки.
            </div>
          </div>
        </div>
        <div className="cart-service__list">
          {cartItem?.item?.order?.map((v: any, k: any) => (
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

      <Row gutter={[8, 8]} className="cart-bottom__info">
        <Col className="cart-bottom__info-title" span={12}>
          Итого
        </Col>
        <Col className="cart-bottom__info-sum" span={12}>
          {cartItem?.item?.orderSum ?? 0} ₽
        </Col>
      </Row>

      <Row gutter={[8, 8]} className="cart-bottom__info">
        {cartItem?.item?.orderSum ? (
          <Col className="cart-bottom__checkout-button">
            <Link
              to={`/checkout/${cartItem?.item?.uuid}`}
              title="Оформить заказ"
              rel="nofollow"
            >
              Оформить заказ
            </Link>
          </Col>
        ) : (
          <Col className="cart-bottom__checkout-button--disabled">
            Корзина пуста
          </Col>
        )}
      </Row>
    </div>
  );
}

export default memo(CartComponent);

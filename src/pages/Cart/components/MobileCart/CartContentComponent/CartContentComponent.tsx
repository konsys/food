import { Col, Row } from 'antd';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TItem } from '../../../../../common/api/types';
import { TUuid, TVoidFn } from '../../../../../common/types';
import { CartDto } from '../../../../../modules/cart/types';
import CartItem from '../../CartItem/CartItem';

import './cartContentComponent.less';

interface Props {
  cart: TItem<CartDto>;
  changeQuantity: (uuid: TUuid, delta: number) => void;
  deleteFromCart: TVoidFn<TUuid>;
}

function CartContentComponent(props: Props) {
  const { cart, changeQuantity, deleteFromCart } = props;

  return (
    <div className="cart-section">
      <Row className="cart-section__body" gutter={[8, 8]}>
        <Col span={24} className="cart-section__title">
          Корзина
        </Col>
        <Col span={24}>
          {cart?.item?.order?.map((v: any, k: any) => (
            <CartItem
              key={k}
              item={v.restaurantMenu}
              quiantity={v.quantity}
              changeQuantity={changeQuantity}
              deleteFromCart={deleteFromCart}
            />
          ))}
        </Col>

        <Col span={24}>Итого</Col>
        <Col span={24}>{cart?.item?.orderSum ?? 0} ₽</Col>
      </Row>

      {cart?.item?.orderSum ? (
        <Row justify="center" align="middle">
          <Col span={24} className="cart-section__checkout-button">
            <Link
              to={`/checkout/${cart?.item?.uuid}`}
              title="Оформить заказ"
              rel="nofollow"
            >
              Оформить заказ
            </Link>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className="cart-section__checkout-button--disabled">
            Корзина пуста
          </Col>
        </Row>
      )}
    </div>
  );
}

export default memo(CartContentComponent);

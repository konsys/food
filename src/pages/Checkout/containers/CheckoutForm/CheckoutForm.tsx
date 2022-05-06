import React, { memo, useEffect } from 'react';
import { useStore } from 'effector-react';
import { Button, Col, Row } from 'antd';
import { TPromiseFn } from '../../../../common/types';
import PhoneCheckout from '../PhoneCheckout/PhoneCheckout';
import PromoCodeCheckoutForm from '../PromoCodeCheckoutForm/PromoCodeCheckoutForm';
import DateCheckoutForm from '../DateCheckoutForm/DateCheckoutForm';
import { PromoDto } from '../../../../modules/promo/types';
import { TItem } from '../../../../common/api/types';
import { CartDto } from '../../../../modules/cart/types';
import OrderDescription from '../../components/OrderDescription/OrderDescription';
import { $orderStore, updateOrderStore } from '../../../../modules/order/model';
import { TOrder } from '../../../../modules/order/types';
import { Nullable } from '../../../../core/types';
import { UserDto } from '../../../../modules/user/types';
import { getClientUuid } from '../../../../modules/cart/service';

import './checkoutForm.less';

interface Props {
  cart: TItem<CartDto>;
  promo: TItem<PromoDto>;
  createOrder: TPromiseFn<Partial<TOrder>>;
  user: Nullable<UserDto>;
}

function CheckoutForm({ cart, promo, createOrder, user }: Props) {
  useEffect(() => {
    if (user) {
      updateOrderStore({
        phone: user.phone,
        isPhoneValid: true,
        userUuid: getClientUuid(),
      });
    }
  }, [user, updateOrderStore]);

  const cartItem = cart?.item;

  const order = useStore($orderStore);
  const { orderDate, price, time, phone } = order;

  const orderPrice = cart?.item?.orderSum ?? 0;
  const percentDiscount = promo?.item?.percentDiscount ?? 0;
  const discount = Math.round((orderPrice / 100) * percentDiscount * 100) / 100;
  return (
    <section className="ordering__mobile">
      <div className="container ordering-form__container">
        <section className="ordering-form">
          <div className="page-title page-title--checkout">
            <h2>Оформление заказа</h2>
          </div>

          {/* PHONE --------------------------- */}
          {user ? user.phone : <PhoneCheckout />}

          {/* TIME --------------------------- */}
          <div className="ordering-form__time">
            <DateCheckoutForm
              disabled={!order.phoneConfirmed && !user}
              cart={cart}
            />
          </div>
          <div className="ordering-form__time">
            <PromoCodeCheckoutForm disabled={!order.phoneConfirmed && !user} />
          </div>

          <div className="ordering-form__finish">
            <div className="order-finish__wrapper">
              <OrderDescription />
              <div className="order-finish__discount">
                {order.percentDiscount ? (
                  <>
                    <Row>
                      <Col span={12} className="order-finish__title">
                        Сумма без скидки
                      </Col>
                      <Col span={12}>
                        <span className="cart-price-total">
                          {cartItem?.orderSum ?? 0}
                          <span className="cart-price-total__money-sign">
                            ₽
                          </span>
                        </span>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={12} className="order-finish__title">
                        Скидка
                      </Col>
                      <Col span={12}>
                        <span className="cart-price-total">
                          {discount}
                          <span className="cart-price-total__money-sign">
                            ₽
                          </span>
                        </span>
                      </Col>
                    </Row>
                  </>
                ) : (
                  ''
                )}
                <Row>
                  <Col span={12} className="order-finish__title">
                    Итого
                  </Col>
                  <Col span={12}>
                    <span className="cart-price-total">
                      {Math.round((orderPrice - discount) * 100) / 100}
                      <span className="cart-price-total__money-sign">₽</span>
                    </span>
                  </Col>
                </Row>
              </div>
              <div className="confirm-order">
                <Button
                  disabled={!(!!orderDate && !!price && !!time && !!phone)}
                  className="confirm-order__button"
                  title="Оформить заказ"
                  onClick={() => createOrder(order)}
                >
                  Оформить заказ
                </Button>
              </div>
            </div>
          </div>
          <input type="hidden" name="user-point" />
          <input type="hidden" data-value-url className="data-url" />
        </section>
      </div>
    </section>
  );
}

export default memo(CheckoutForm);

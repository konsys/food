import { Col, Row, Spin } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { memo } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { TUuid } from '../../../common/types';
import { OrderModel, RestaurantModel } from '../../../store';

import './orderCompleted.less';

const { ItemGate, $itemStore: orderStore } = OrderModel;
const { ItemGate: RestaurantGate, $itemStore: restaurantStore } =
  RestaurantModel;

function OrderCompletedPage() {
  const { uuid } = useParams<{ uuid: TUuid }>();
  useGate(ItemGate, uuid);

  const { item: order, pending } = useStore(orderStore);
  const { item: restaurant } = useStore(restaurantStore);

  useGate(RestaurantGate, order?.restaurantUuid);

  return (
    <Spin spinning={pending}>
      <div className="container">
        <Row gutter={[8, 8]} className="order-completed">
          <Col span={24} className="order-completed__title">
            Заказ успешно оформлен
          </Col>
          <Col span={24} className="order-completed__date">
            {`Мы ждем Вас  ${moment(order?.date).format('DD MMMM YYYY')} в
            ${order?.time}`}
          </Col>
          <Col span={24}>По адресу {restaurant?.legalUuid}</Col>
          <Col span={24}>{order?.priceWithoutDiscount}</Col>
          <Col span={24}>{restaurant?.name}</Col>
        </Row>
      </div>
    </Spin>
  );
}

export default memo(OrderCompletedPage);

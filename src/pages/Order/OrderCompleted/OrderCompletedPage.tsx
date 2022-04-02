import { Col, Row, Spin } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { OrderModel, RestaurantModel } from '../../../store';

const { ItemGate, $itemStore: orderStore } = OrderModel;
const { ItemGate: RestaurantGate, $itemStore: restaurantStore } =
  RestaurantModel;

function OrderCompletedPage() {
  const { uuid } = useParams<{ uuid: string }>();
  useGate(ItemGate, uuid);

  const { item: order, pending } = useStore(orderStore);
  const { item: restaurant } = useStore(restaurantStore);

  useGate(RestaurantGate, order?.restaurantUuid);

  console.log(order);
  return (
    <Spin spinning={pending}>
      <div className="container">
        <Row gutter={[8, 8]}>
          <Col span={24}>Заказ успешно оформлен </Col>
          <Col span={24}>{order?.date}</Col>
          <Col span={24}>{order?.places}</Col>
          <Col span={24}>{order?.priceWithoutDiscount}</Col>
          <Col span={24}>{restaurant?.name}</Col>
        </Row>
      </div>
    </Spin>
  );
}

export default memo(OrderCompletedPage);

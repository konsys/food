import { Spin, Row, Col } from 'antd';
import React, { memo } from 'react';
import { TItem } from '../../../../common/api/types';
import { CartDto } from '../../../../modules/cart/types';
import Cart from '../../Cart';
import MobileCartButton from '../MobileCart/MobileCartButton/MobileCartButton';

interface Props {
  cart: TItem<CartDto>;
}

function CartView(props: Props) {
  const { cart } = props;

  return (
    <Spin spinning={cart?.pending}>
      <Row>
        <Col xs={{ span: 0 }} lg={{ span: 24 }}>
          <Cart sideView />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 0 }}>
          <MobileCartButton cart={cart} />
        </Col>
      </Row>
    </Spin>
  );
}

export default memo(CartView);

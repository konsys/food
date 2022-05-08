import React, { memo } from 'react';
import { Row, Col } from 'antd';
import { TItem } from '../../../common/api/types';
import { CartDto } from '../../../modules/cart/types';
import LoginPage from '../../Auth/Login/LoginModal';
import CartLink from '../components/CartLink/CartLink';
import CartStub from '../components/CartStub/CartStub';
import './headerButtons.less';

type Props = {
  cart?: TItem<CartDto>;
};

const HeaderButtons = ({ cart }: Props) => (
  <Row gutter={8}>
    <Col>{cart?.item?.orderSum ? <CartLink cart={cart} /> : <CartStub />}</Col>
    <Col>
      <LoginPage />
    </Col>
  </Row>
);

export default memo(HeaderButtons);

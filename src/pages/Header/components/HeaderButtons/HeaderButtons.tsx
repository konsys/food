import { Row, Col } from 'antd';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TItem } from '../../../../common/api/types';
import { CartDto } from '../../../../modules/cart/types';
import { LoginPage } from '../../../Login/Login';
import CartLink from '../CartLink/CartLink';
import CartStub from '../CartStub/CartStub';
import './headerButtons.less';

type Props = {
  cart?: TItem<CartDto>;
};

const HeaderButtons = ({ cart }: Props) => (
  <Row gutter={8} className="d-flex float-end">
    <Col className="d-none d-md-flex ">
      {cart?.item?.orderSum ? <CartLink cart={cart} /> : <CartStub />}
    </Col>
    <Col>
      <LoginPage />
    </Col>
  </Row>
);

export default memo(HeaderButtons);

import React, { memo } from 'react';
import { Col, Row } from 'antd';
import { useGate, useStore } from 'effector-react';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';
import { HeaderCity } from './components/HeaderCity/HeaderCity';
import { CartModel } from '../../store';
import { getClientUuid } from '../../modules/cart/service';

import './header.less';

const { ItemGate: CartGate, $itemStore: cartStore } = CartModel;

function Header() {
  useGate(CartGate, getClientUuid());
  const cart = useStore(cartStore);
  return (
    <header className="header">
      <div className="container">
        <Row justify="center">
          <Col span={4}>
            <HeaderLogo />
          </Col>
          <Col span={8}>
            <HeaderCity />
          </Col>
          <Col span={12} className="header_container">
            <div className="header_container-buttons">
              <HeaderButtons cart={cart} />
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default memo(Header);

import React, { memo } from 'react';
import { Col, Row } from 'antd';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';
import { HeaderCity } from './components/HeaderCity/HeaderCity';

import './header.less';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Row justify="center" align="middle" gutter={16}>
          <Col lg={6} md={4}>
            <HeaderLogo />
          </Col>
          <Col lg={8} md={4}>
            <HeaderCity />
          </Col>
          <Col lg={10} md={16} className=" header_container-buttons">
            <HeaderButtons />
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default memo(Header);

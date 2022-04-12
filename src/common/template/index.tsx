import React, { ReactElement } from 'react';
import { Row, Col } from 'antd';
import Content from './components/Content/Content';
import Header from '../../pages/Header/Header';
import Footer from './components/Footer/Footer';

import './index.less';
import './animation.less';

interface Props {
  children: ReactElement;
}

export function Template({ children }: Props) {
  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <Content>{children}</Content>
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

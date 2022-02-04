import { Col, Row } from 'antd';
import React, { ReactElement } from 'react';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
import { Header } from './Header/Header';
import './style.less';

interface Props {
  children: ReactElement;
}

export function Template({ children }: Props) {
  children;
  return (
    <Row className='wrapper'>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <div className='contentWrapper'>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Breadcrumbs />
            </Col>
            <Col span={24}>2</Col>
            <Col span={24}>2</Col>
            <Col span={24}>2</Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

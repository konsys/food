import { Row, Col } from 'antd';
import React, { ReactElement } from 'react';

export function NotFound(): ReactElement {
  return (
    <Row className="container" gutter={[8, 8]}>
      <Col span={24}>Page not found</Col>
      <Col span={24}>404</Col>
    </Row>
  );
}

import { Row, Col } from 'antd';
import React, { memo } from 'react';

function MainPage() {
  return (
    <Row className="container">
      <Col> Main Page</Col>
      <Col />
    </Row>
  );
}

export default memo(MainPage);

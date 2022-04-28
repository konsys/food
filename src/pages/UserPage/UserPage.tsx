import { Row, Col } from 'antd';
import React, { memo } from 'react';

interface Props {}

function UserPage(props: Props) {
  const {} = props;

  return (
    <Row>
      <Col>UserPage</Col>
    </Row>
  );
}

export default memo(UserPage);

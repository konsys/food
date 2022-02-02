import React from 'react';
import { Row, Col, Space } from 'antd';

export function MenuHeader() {
  return (
    <Row>
        <Col span={24}>
          <Space
            direction='vertical'
            style={{ width: '100%', justifyContent: 'center' }}
            className='heading-title text-center'
          >
            <h2>Special Menu</h2>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting</div>
          </Space>
        </Col>
      </Row>
  );
}

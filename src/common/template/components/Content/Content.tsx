import { Row, Col } from 'antd';
import React, { memo, ReactNode } from 'react';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import './content.less';

interface Props {
  children: ReactNode;
}

function Content(props: Props) {
  const { children } = props;

  return (
    <main className="page-content">
      <Breadcrumbs />
      <Row>
        <Col span={24}>{children}</Col>
      </Row>
    </main>
  );
}

export default memo(Content);

import { Row, Col } from 'antd';
import React, { memo } from 'react';
import MetaContent from '../../common/template/components/MetaContent/MetaContent';
import Promo from '../../common/template/components/Promo/Promo';
import PromoPartners from '../../common/template/components/PromoPartners/PromoPartners';
import Welcome from '../../common/template/components/Welcome/Welcome';

function MainPage() {
  return (
    <Row>
      <Col span={24}>
        <MetaContent />
      </Col>
      <Col span={24}>
        <Welcome />
      </Col>
      <Col span={24}>
        <Promo />
      </Col>
      <Col span={24}>
        <PromoPartners />
      </Col>
    </Row>
  );
}

export default memo(MainPage);

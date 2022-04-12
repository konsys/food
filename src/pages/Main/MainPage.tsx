import { Row } from 'antd';
import React, { memo } from 'react';
import MetaContent from '../../common/template/components/Content/components/MetaContent/MetaContent';
import Promo from '../../common/template/components/Content/Promo/Promo';
import PromoPartners from '../../common/template/components/Content/PromoPartners/PromoPartners';
import Welcome from '../../common/template/components/Content/Welcome/Welcome';

function MainPage() {
  return (
    <div className="container">
      <main className="page-content">
        {/* <Breadcrumbs /> */}
        <MetaContent />
        <Welcome />
        <Promo />
        <PromoPartners />
      </main>
    </div>
  );
}

export default memo(MainPage);

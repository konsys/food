import React, { memo } from 'react';
import MetaContent from '../../common/template/components/Content/components/MetaContent/MetaContent';
import Promo from '../../common/template/components/Content/Promo/Promo';
import PromoPartners from '../../common/template/components/Content/PromoPartners/PromoPartners';
import Welcome from '../../common/template/components/Content/Welcome/Welcome';

function MainPage() {
  return (
    <>
      <MetaContent />
      <Welcome />
      <Promo />
      <PromoPartners />
    </>
  );
}

export default memo(MainPage);

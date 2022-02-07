import React, { memo, ReactNode } from 'react';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import MetaContent from './components/MetaContent/MetaContent';
import Promo from './Promo/Promo';
import PromoPartners from './PromoPartners/PromoPartners';
import Welcome from './Welcome/Welcome';

interface Props {
  children: ReactNode;
}

function Content(props: Props) {
  const { children } = props;

  return (
    <main className='page-content'>
      <Breadcrumbs />
      <MetaContent />

      <Welcome />
      {children}
      <Promo />
      <PromoPartners />
      <section className='container custom-page' />
    </main>
  );
}

export default memo(Content);

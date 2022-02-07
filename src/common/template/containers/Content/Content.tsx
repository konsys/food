import React, { memo, ReactNode } from 'react';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import MetaContent from './components/MetaContent/MetaContent';

interface Props {
  children: ReactNode;
}

function Content(props: Props) {
  const { children } = props;

  return (
    <main className='page-content'>
      <Breadcrumbs />
      {/* <MetaContent /> */}

      {/* TODO add for main page */}
      {/* <Welcome /> */}
      {children}
      {/* TODO add for main page */}
      {/* <Promo />
        {/* TODO add for main page */}
      {/* <PromoPartners />  */}
      <section className='container custom-page' />
    </main>
  );
}

export default memo(Content);

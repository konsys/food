import React, { FC } from 'react';
import { Welcome } from './components/Welcome/Welcome';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import Restaraunts from './components/Restaurants/Restaraunts';
import { Promo } from './components/Promo/Promo';
import { PromoPartners } from './components/PromoPartners/PromoPartners';
import { MetaContent } from './components/MetaContent/MetaContent';

export const Content: FC = () => (
  <main className='page-content'>
    <MetaContent />
    <Welcome />
    <Breadcrumbs />
    <Restaraunts />
    <Promo />
    <PromoPartners />
    <section className='container custom-page' />
  </main>
);

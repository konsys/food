import React, { FC, ReactNode } from 'react';
import { PromoPartners } from './PromoPartners/PromoPartners';
import { MetaContent } from './components/MetaContent/MetaContent';
import { Welcome } from './Welcome/Welcome';
import { Promo } from './Promo/Promo';

type Props = {
  children: ReactNode;
};

export const Content: FC<Props> = ({ children }: Props) => (
  <main className='page-content'>
    <MetaContent />
    <Welcome />
    {children}
    <Promo />
    <PromoPartners />
    <section className='container custom-page' />
  </main>
);

import React, { FC, ReactNode } from 'react';
import { MetaContent } from './components/MetaContent/MetaContent';

type Props = {
  children: ReactNode;
};

export const Content: FC<Props> = ({ children }: Props) => (
  <main className='page-content'>
    <MetaContent />
    {/* <Welcome /> */}
    {children}
    {/* <Promo /> */}
    {/* <PromoPartners /> */}
    <section className='container custom-page' />
  </main>
);

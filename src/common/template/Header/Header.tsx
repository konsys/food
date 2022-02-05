import React, { FC } from 'react';
import './header.less';
import { HeaderButtons } from './components/HeaderButtons/HeaderButtons';
import { HeaderNavigationToggle } from './components/HeaderNavigationToggle/HeaderNavigationToggle';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';
import { HeaderCity } from './components/HeaderCity/HeaderCity';

export const Header: FC = () => (
  <>
    <header className='header header_sticky'>
      <div className='header-content'>
        <HeaderNavigationToggle />
        <div className='header-container container'>
          <HeaderLogo />
          <HeaderCity />
          <HeaderButtons />
        </div>
      </div>
    </header>
    <div className='fake-header' />
  </>
);

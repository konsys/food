import React, { memo } from 'react';
import './header.less';
import { HeaderButtons } from './components/HeaderButtons/HeaderButtons';
import { HeaderNavigationToggle } from './components/HeaderNavigationToggle/HeaderNavigationToggle';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';
import { HeaderCity } from './components/HeaderCity/HeaderCity';

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
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
}

export default memo(Header);

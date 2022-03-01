import React, { memo } from 'react';
import { useStore } from 'effector-react';
import HeaderButtons from './components/HeaderButtons/HeaderButtons';
import { HeaderNavigationToggle } from './components/HeaderNavigationToggle/HeaderNavigationToggle';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';
import { HeaderCity } from './components/HeaderCity/HeaderCity';
import './header.less';
import { CartModel } from '../../store';

const { $itemStore: cartStore } = CartModel;
function Header() {
  const cart = useStore(cartStore);
  return (
    <>
      <header className='header header_sticky'>
        <div className='header-content d-flex'>
          <HeaderNavigationToggle />
          <div className='header-container container'>
            <HeaderLogo />
            <HeaderCity />
            <HeaderButtons cartPrice={cart.item?.orderSum} />
          </div>
        </div>
      </header>
      <div className='fake-header' />
    </>
  );
}

export default memo(Header);

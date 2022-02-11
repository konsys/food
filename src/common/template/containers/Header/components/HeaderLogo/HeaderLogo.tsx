import React from 'react';

export const HeaderLogo = () => (
  <div className='header-logo'>
    <a href='https://broniboy.ru' className='d-sm-block d-md-none' title='Главная'>
      {/* <img
        src='https://broniboy.ru/img/content/logo/main-logo.svg'
        alt='Broniboy'
        className='hidden-xs'
      /> */}
      <img
        src='https://broniboy.ru/img/content/logo/main-logo-mobile.svg'
        alt='Broniboy'
        className='d-sm-none d-md-block'
        style={{ height: '50px' }}
      />
    </a>
  </div>
);

import React from 'react';

export const HeaderLogo = () => (
  <div className='header-logo'>
    <a href='https://broniboy.ru' title='Главная'>
      <img
        className='d-none d-md-block'
        src='https://broniboy.ru/img/content/logo/main-logo.svg'
        alt='Broniboy'
      />
      <img
        src='https://broniboy.ru/img/content/logo/main-logo-mobile.svg'
        alt='Broniboy'
        className='d-block d-md-none'
        style={{ height: '50px' }}
      />
    </a>
  </div>
);

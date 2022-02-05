import React from 'react';

export const HeaderLogo = () => (
  <div className='header-logo'>
    <a href='https://broniboy.ru' title='Главная'>
      <img
        src='https://broniboy.ru/img/content/logo/main-logo.svg'
        alt='Broniboy'
        className='hidden-xs'
      />
      <img
        src='https://broniboy.ru/img/content/logo/main-logo-mobile.svg'
        alt='Broniboy'
        className='visible-xs'
      />
    </a>
  </div>
);

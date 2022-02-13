import React from 'react';
import { Link } from 'react-router-dom';
import './headerLogo.less';

export const HeaderLogo = () => (
  <div className='header-logo float-start'>
    <Link to='/' title='Главная'>
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
    </Link>
  </div>
);

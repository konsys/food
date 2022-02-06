import React from 'react';

export const HeaderButtons = () => (
  <nav className='header-nav header-buttons'>
    <ul className='list-clear clearfix'>
      <li className='hidden-xs hidden-sm'>
        <a
          id='header-basket-button'
          href='https://broniboy.ru/checkout/'
          title='Корзина'
          rel='nofollow'
          className='header-nav-item-link-basket header-nav-item-link-basket_active'
          style={{ display: 'none' }}
        >
          <b />
        </a>
        <a
          id='header-basket-button-stub'
          href='/'
          title='Корзина пуста'
          rel='nofollow'
          className='header-nav-item-link-basket-stub'
        />
      </li>
      <li>
        <a href='/' className='header-nav-item-link' title='Войти'>
          <span>Войти</span>
        </a>
      </li>
    </ul>
  </nav>
);

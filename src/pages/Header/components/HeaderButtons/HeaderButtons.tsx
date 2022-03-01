import React from 'react';
import { Link } from 'react-router-dom';
import './headerButtons.less';

export const HeaderButtons = () => (
  <nav className='header-nav header-buttons d-flex float-end'>
    <ul className='list-clear clearfix'>
      <li className='hidden-xs hidden-sm'>
        <a
          href='https://broniboy.ru/checkout/'
          title='Корзина'
          rel='nofollow'
          className='header-nav-item-link-basket header-nav-item-link-basket_active header-nav-item-link-basket_active-animate'
        >
          <b>1 680 ₽</b>
        </a>
        <Link
          to='/'
          title='Корзина пуста'
          rel='nofollow'
          className='header-nav-item-link-basket-stub'
          style={{ display: 'none' }}
        />
      </li>
      <li>
        <Link to='/' className='header-nav-item-link' title='Войти'>
          <span>Войти</span>
        </Link>
      </li>
    </ul>
  </nav>
);

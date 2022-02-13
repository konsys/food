import React from 'react';
import { Link } from 'react-router-dom';
import './headerButtons.less';

export const HeaderButtons = () => (
  <nav className='header-nav header-buttons d-flex float-end'>
    <ul className='list-clear clearfix'>
      <li className='hidden-xs hidden-sm'>
        <Link
          to='/'
          title='Корзина'
          rel='nofollow'
          className='header-nav-item-link-basket header-nav-item-link-basket_active'
          style={{ display: 'none' }}
        >
          <b />
        </Link>
        <Link
          to='/'
          title='Корзина пуста'
          rel='nofollow'
          className='header-nav-item-link-basket-stub'
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

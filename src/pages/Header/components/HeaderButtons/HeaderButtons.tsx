import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './headerButtons.less';

type Props = {
  cartPrice?: number;
};
const HeaderButtons = ({ cartPrice }: Props) => (
  <nav className='header-nav header-buttons d-flex float-end'>
    <ul className='list-clear clearfix'>
      <li className='d-none d-md-flex '>
        {cartPrice ? (
          <Link
            to='/'
            title='Корзина'
            rel='nofollow'
            className='header-nav-item-link-basket header-nav-item-link-basket_active header-nav-item-link-basket_active-animate'
          >
            <b>{cartPrice} ₽</b>
          </Link>
        ) : (
          <Link
            to='/'
            title='Корзина пуста'
            rel='nofollow'
            className='header-nav-item-link-basket-stub'
          />
        )}
      </li>
      <li>
        <Link to='/' className='header-nav-item-link' title='Войти'>
          <span>Войти</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default memo(HeaderButtons);

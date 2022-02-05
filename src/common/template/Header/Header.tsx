import React, { FC } from 'react';
import './header.less';
import { ReactComponent as Geoposition } from '../img/svg/';

export const Header: FC = () => (
  <>
    <header className='header header_sticky'>
      <div className='header-content'>
        <div className='header-nav-toggle'>
          <button type='button' className='nav-toggle btn-clear'>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className='header-container container'>
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
          <div className='header-city'>
            <a
              href='/'
              data-toggle='modal'
              data-target='#select-city-modal'
              id='desktop-select-city'
              data-city-name='Нижний Новгород'
              data-city-id='1c55ec16-d7bd-4d61-a0d6-2ac75121ee05'
            >
              <Geoposition />
              <span className='header-city__name'>Нижний Новгород</span>
            </a>
          </div>
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
                <a
                  href='/'
                  data-toggle='modal'
                  data-target='#login-modal'
                  className='header-nav-item-link'
                  title='Войти'
                >
                  <span>Войти</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div className='fake-header' />
  </>
);

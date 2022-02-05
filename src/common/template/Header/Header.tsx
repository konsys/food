import React, { FC } from 'react';
import './header.less';
import { ReactComponent as Geoposition } from '../img/svg/geoposition.svg';

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
            <a href='/'>
              {/* <svg
                width={24}
                height={26}
                viewBox='0 0 24 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M17.2764 7.02209V7.02209C20.1906 9.9363 20.1906 14.6612 17.2764 17.5754L13.2432 21.6086C12.5565 22.2953 11.443 22.2953 10.7563 21.6086L6.72311 17.5754C3.80889 14.6612 3.80889 9.9363 6.72311 7.02209V7.02209C9.63732 4.10788 14.3622 4.10788 17.2764 7.02209Z'
                  stroke='black'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M17.2764 7.02209V7.02209C20.1906 9.9363 20.1906 14.6612 17.2764 17.5754L13.2432 21.6086C12.5565 22.2953 11.443 22.2953 10.7563 21.6086L6.72311 17.5754C3.80889 14.6612 3.80889 9.9363 6.72311 7.02209V7.02209C9.63732 4.10788 14.3622 4.10788 17.2764 7.02209Z'
                  stroke='black'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 14.8593C13.4141 14.8593 14.5604 13.713 14.5604 12.2989C14.5604 10.8848 13.4141 9.73848 12 9.73848C10.5859 9.73848 9.43958 10.8848 9.43958 12.2989C9.43958 13.713 10.5859 14.8593 12 14.8593Z'
                  stroke='black'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg> */}
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

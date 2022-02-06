import React, { FC } from 'react';
import './welcome.less';

export const Welcome: FC = () => (
  <section className='welcome'>
    <div className='welcome-content container'>
      <h1>Доставка за 1 час в Нижнем Новгороде</h1>
      <div className='welcome__description'>
        Кафе, рестораны, супермаркеты, аптеки, подарки, цветы, спортивное питание и просто услуги
        курьера.
      </div>
      <div className='welcome-search'>
        <form className='welcome-search-form' method='post' action='https://broniboy.ru/nn/'>
          <div className='welcome-search-form-content clearfix'>
            <label htmlFor='search-address-form-input' />
            <input
              className='search-address-form-input'
              type='text'
              name='user-address'
              autoComplete='off'
              placeholder='Укажите адрес доставки'
              required
              defaultValue='Варварская улица'
            />
            <input
              type='hidden'
              name='_csrf'
              defaultValue='HYLxojmEQJZ_FoOF41Dv36mTrkpaK0d_5wSglgOj18kw1aDrc8d40yx9wv2mCbi0--ncKAl0FhWLfo33N8e68Q=='
            />
            <input type='hidden' name='user-point' className='input-geo-point' />
            <button type='submit' className='peach-btn'>
              <svg
                width={20}
                height={20}
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19.6289 19.6285C19.3815 19.8762 19.0853 20 18.7402 20C18.3952 20 18.099 19.8762 17.8516 19.6285L13.9844 15.7576C12.4219 16.9176 10.6771 17.4976 8.75 17.4976C7.5651 17.4976 6.43229 17.2662 5.35156 16.8035C4.27083 16.3408 3.33984 15.7185 2.55859 14.9365C1.77734 14.1544 1.1556 13.2258 0.693359 12.1505C0.23112 11.0753 0 9.94135 0 8.74878C0 7.55621 0.23112 6.41903 0.693359 5.33724C1.1556 4.25546 1.77734 3.32682 2.55859 2.55132C3.33984 1.77582 4.27083 1.15673 5.35156 0.694037C6.43229 0.231346 7.5651 0 8.75 0C9.9349 0 11.0677 0.231346 12.1484 0.694037C13.2292 1.15673 14.1602 1.77582 14.9414 2.55132C15.7227 3.32682 16.3444 4.25546 16.8066 5.33724C17.2689 6.41903 17.5 7.55295 17.5 8.739C17.5 10.681 16.9206 12.4275 15.7617 13.9785L19.6289 17.8495C19.8763 18.0971 20 18.3936 20 18.739C20 19.0844 19.8763 19.3809 19.6289 19.6285ZM8.75 2.50244C7.61719 2.50244 6.57227 2.77941 5.61523 3.33333C4.6582 3.88726 3.89974 4.64646 3.33984 5.61095C2.77995 6.57543 2.5 7.62138 2.5 8.74878C2.5 9.87618 2.77995 10.9221 3.33984 11.8866C3.89974 12.8511 4.6582 13.6103 5.61523 14.1642C6.57227 14.7181 7.61719 14.9951 8.75 14.9951C9.88281 14.9951 10.9277 14.7181 11.8848 14.1642C12.8418 13.6103 13.6003 12.8511 14.1602 11.8866C14.7201 10.9221 15 9.87618 15 8.74878C15 7.62138 14.7201 6.57543 14.1602 5.61095C13.6003 4.64646 12.8418 3.88726 11.8848 3.33333C10.9277 2.77941 9.88281 2.50244 8.75 2.50244Z'
                  fill='white'
                />
              </svg>
            </button>
            <ul className='list-clear list-search live-search-help-house'>
              <div className='list-search__description'>Введите номер дома</div>
            </ul>
          </div>
        </form>
      </div>
      <div className='welcome__categories'>
        <a
          href='https://broniboy.ru/nn/restaurants/'
          className='welcome__category'
          title='Рестораны и кафе'
        >
          <div>
            <img
              src='https://images.broniboy.ru/dYmsVauYReBn3X4yMeOaC_5WBaQ=/fit-in/200x200/smart/filters:smart_sharpen():allow_webp(false)/own/4b3418a2-7df5-4fcb-883c-4b010de59b2f/903e685a5a63111e79e352c1cd59bae0.png'
              title='Рестораны и кафе'
              alt='Рестораны и кафе'
            />
          </div>
          <div className='welcome__category-title'>Рестораны и кафе</div>
        </a>
        <a href='https://broniboy.ru/nn/grocery/' className='welcome__category' title='Продукты'>
          <div>
            <img
              src='https://images.broniboy.ru/XjA1KerjXXBoCkL9JDHhbV-apmA=/fit-in/200x200/smart/filters:smart_sharpen():allow_webp(false)/own/1e67b208-40ed-415c-bdc0-c654f27ff01e/edd70e9ee8a1a5d2451f82753f6fb33f.png'
              title='Продукты'
              alt='Продукты'
            />
          </div>
          <div className='welcome__category-title'>Продукты</div>
        </a>
        <a href='https://broniboy.ru/nn/pharmacy/' className='welcome__category' title='Аптеки'>
          <div>
            <img
              src='https://images.broniboy.ru/B-F0b_RcjpWbruAj5fYyAKZLk5Q=/200x200/smart/filters:smart_sharpen():allow_webp(false)/own/f194e20d-2ed7-4b4e-872a-df0edaba60c2/6e71648a0b866e7520b85ded4e92a4aa.png'
              title='Аптеки'
              alt='Аптеки'
            />
          </div>
          <div className='welcome__category-title'>Аптеки</div>
        </a>
      </div>
    </div>
  </section>
);

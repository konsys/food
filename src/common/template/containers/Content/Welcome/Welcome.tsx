import React, { memo } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './welcome.less';
import { Link } from 'react-router-dom';

interface Props {}

function Welcome(props: Props) {
  const {} = props;

  return (
    <section className='welcome'>
      <div className='welcome-content container'>
        <h1 className='welcome-content__title'>Доставка за 1 час в Нижнем Новгороде</h1>
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
              <button type='submit' className='welcome-search__submit-button'>
                <SearchOutlined />
              </button>

              <ul className='list-clear list-search live-search-help-house'>
                <div className='list-search__description'>Введите номер дома</div>
              </ul>
            </div>
          </form>
        </div>
        <div className='welcome__categories d-flex justify-content-around'>
          <Link to='/restaurants/' className='welcome__category' title='Рестораны и кафе'>
            <div>
              <img
                src='https://images.broniboy.ru/dYmsVauYReBn3X4yMeOaC_5WBaQ=/fit-in/200x200/smart/filters:smart_sharpen():allow_webp(false)/own/4b3418a2-7df5-4fcb-883c-4b010de59b2f/903e685a5a63111e79e352c1cd59bae0.png'
                title='Рестораны и кафе'
                alt='Рестораны и кафе'
              />
            </div>
            <div className='welcome__category-title'>Рестораны и кафе</div>
          </Link>
          <Link to='/grocery/' className='welcome__category' title='Продукты'>
            <div>
              <img
                src='https://images.broniboy.ru/XjA1KerjXXBoCkL9JDHhbV-apmA=/fit-in/200x200/smart/filters:smart_sharpen():allow_webp(false)/own/1e67b208-40ed-415c-bdc0-c654f27ff01e/edd70e9ee8a1a5d2451f82753f6fb33f.png'
                title='Продукты'
                alt='Продукты'
              />
            </div>
            <div className='welcome__category-title'>Продукты</div>
          </Link>
          <Link to='https://broniboy.ru/nn/pharmacy/' className='welcome__category' title='Аптеки'>
            <div>
              <img
                src='https://images.broniboy.ru/B-F0b_RcjpWbruAj5fYyAKZLk5Q=/200x200/smart/filters:smart_sharpen():allow_webp(false)/own/f194e20d-2ed7-4b4e-872a-df0edaba60c2/6e71648a0b866e7520b85ded4e92a4aa.png'
                title='Аптеки'
                alt='Аптеки'
              />
            </div>
            <div className='welcome__category-title'>Аптеки</div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default memo(Welcome);

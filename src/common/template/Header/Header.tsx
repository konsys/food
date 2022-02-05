import React, { FC } from 'react';
import './styles.less';

export const Header: FC = () => (
  <>
    <div className='page-wrapper'>
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
                <svg
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
                </svg>
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
      <main className='page-content'>
        <div itemScope itemType='https://schema.org/WebPage' className='hidden'>
          <meta
            itemProp='name'
            content='Доставка еды, продуктов, лекарств и цветов на дом в Нижнем Новгороде - сервис быстрой доставки Broniboy'
          />
          <a itemProp='url' href='https://broniboy.ru/nn/' />
          <meta itemProp='mainEntityOfPage' content='https://broniboy.ru/nn/' />
          <meta
            itemProp='headline'
            content='Доставка еды, продуктов, лекарств и цветов на дом в Нижнем Новгороде - сервис быстрой доставки Broniboy'
          />
          <meta
            itemProp='description'
            content='Заказать еду, продукты и товары, лекарства или цветы на дом в Нижнем Новгороде. Быстрая доставка от 26 минут в день заказа. Онлайн оплата картой или наличными'
          />
          <meta itemProp='image' content='https://broniboy.ru/img/social/social.jpg' />
          <meta
            itemProp='keywords'
            content='доставка нижний новгород, быстрая доставка нижний новгород'
          />
        </div>
        <div itemScope itemType='https://schema.org/BreadcrumbList' className='hidden'>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Broniboy' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/' />
            <meta itemProp='item' content='https://broniboy.ru/' />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Нижний Новгород' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/nn/' />
            <meta itemProp='item' content='https://broniboy.ru/nn/' />
          </div>
        </div>
        <div itemScope itemType='https://schema.org/Organization' className='hidden'>
          <meta itemProp='name' content='Сервис доставки Broniboy' />
          <a itemProp='url' href='https://broniboy.ru/nn/' />
          <meta itemProp='email' content='support@broniboy.ru' />
          <meta itemProp='telephone' />
          <meta itemProp='logo' content='https://broniboy.ru/img/content/logo/logo_squared.jpg' />
          <meta itemProp='image' content='https://broniboy.ru/img/social/social.jpg' />
          <meta itemProp='image' content='https://broniboy.ru/img/social/social_1_1.jpg' />
          <meta itemProp='image' content='https://broniboy.ru/img/social/social_4_3.jpg' />
          <meta
            itemProp='address'
            content='350000, Краснодарский край, г. Краснодар, ул. Рашпилевская, д. 110'
          />
          <div itemProp='aggregateRating' itemScope itemType='https://schema.org/AggregateRating'>
            <meta itemProp='ratingValue' content='4.1' />
            <meta itemProp='ratingCount' />
            <meta itemProp='bestRating' />
            <meta itemProp='worstRating' />
          </div>
        </div>
        <div itemScope itemType='https://schema.org/ItemList' className='hidden'>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Три апельсина' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/nn/restaurants/p_tri-apelsina/' />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Coffee Cake' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/nn/restaurants/p_coffee-cake/' />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Горячо' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/nn/restaurants/p_goriacho/' />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Маджонг' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/nn/restaurants/p_madzhong/' />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Юла Пицца' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/nn/restaurants/p_iula-pitstsa/' />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='AMO' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/nn/restaurants/p_amo/' />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Хачапури Тетушки Марико' />
            <meta itemProp='position' />
            <a
              itemProp='url'
              href='https://broniboy.ru/nn/restaurants/p_khachapuri-tetushki-mariko/'
            />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Та самая шаурма на Средном' />
            <meta itemProp='position' />
            <a
              itemProp='url'
              href='https://broniboy.ru/nn/restaurants/p_ta-samaia-shaurma-na-srednom/'
            />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Franky bar' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/nn/restaurants/p_franky-bar/' />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='JAMEL' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/nn/restaurants/p_chaikhana-zhamel/' />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Ригла' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/nn/pharmacy/p_rigla/' />
          </div>
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content='Хачапури и Вино' />
            <meta itemProp='position' />
            <a itemProp='url' href='https://broniboy.ru/nn/restaurants/p_khachapuri-i-vino/' />
          </div>
        </div>
        <section className='welcome'>
          <div className='welcome-content container'>
            <h1>Доставка за 1 час в Нижнем Новгороде</h1>
            <div className='welcome__description'>
              Кафе, рестораны, супермаркеты, аптеки, подарки, цветы, спортивное питание и просто
              услуги курьера.
            </div>
            <div className='welcome-search'>
              <form className='welcome-search-form' method='post' action='https://broniboy.ru/nn/'>
                <div className='welcome-search-form-content clearfix'>
                  <label htmlFor='search-address-form-input'>
                    <input
                      id='search-address-form-input'
                      className='search-address-form-input'
                      type='text'
                      name='user-address'
                      autoComplete='off'
                      placeholder='Укажите адрес доставки'
                      required
                      defaultValue='Варварская улица'
                      data-actor='welcome-search-input'
                    />
                  </label>
                  <input
                    type='hidden'
                    name='_csrf'
                    defaultValue='HYLxojmEQJZ_FoOF41Dv36mTrkpaK0d_5wSglgOj18kw1aDrc8d40yx9wv2mCbi0--ncKAl0FhWLfo33N8e68Q=='
                  />
                  <input type='hidden' name='user-point' className='input-geo-point' />{' '}
                  <button type='submit' className='peach-btn' data-actor='welcome-search-btn'>
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
              <a
                href='https://broniboy.ru/nn/grocery/'
                className='welcome__category'
                title='Продукты'
              >
                <div>
                  <img
                    src='https://images.broniboy.ru/XjA1KerjXXBoCkL9JDHhbV-apmA=/fit-in/200x200/smart/filters:smart_sharpen():allow_webp(false)/own/1e67b208-40ed-415c-bdc0-c654f27ff01e/edd70e9ee8a1a5d2451f82753f6fb33f.png'
                    title='Продукты'
                    alt='Продукты'
                  />
                </div>
                <div className='welcome__category-title'>Продукты</div>
              </a>
              <a
                href='https://broniboy.ru/nn/pharmacy/'
                className='welcome__category'
                title='Аптеки'
              >
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
        <div className='breadcrumbs-home-wrapper'>
          <div className='breadcrumbs'>
            <div className='container'>
              <ul className='list-clear'>
                <li data-actor='breadcrumbs-element' data-level={0}>
                  <a href='https://broniboy.ru' title='Главная'>
                    <span>Главная</span>
                  </a>
                </li>
                <li data-actor='breadcrumbs-element-active' data-level={1}>
                  <a href='/' title='Нижний Новгород' className='disabled'>
                    <span>Нижний Новгород</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className='restaurants'>
          <div className='container'>
            <header id='restaurants'>
              <div className='restaurants-header-title restaurants-header-title--home-page'>
                <div className='page-title'>
                  <h2>Самые популярные места</h2>
                </div>
              </div>
            </header>
            <div className='restaurants-body'>
              <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                  <div
                    className='restaurant-box '
                    data-place-data='{"id":"d95a2e03-74f7-453e-a93d-56d62bc72c46","name":"\u0422\u0440\u0438 \u0430\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u0430","delivery_type":"default","delivery_time":null,"index":0}'
                  >
                    <div className='restaurant-box-top'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_tri-apelsina/'
                        title='Три апельсина'
                      >
                        <img
                          data-src='https://images.broniboy.ru/-WAvLAfhsBKJaff_063zxBUp0gw=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/8d783828-84b1-4fc0-8d3e-022654859f98/ed97ddba3139ea9e714c59b69e5a26a0.jpg'
                          title='Три апельсина'
                          alt='Три апельсина'
                          className='restaurant-cover-image transition lazyloaded'
                          style={{
                            height: 'auto',
                            width: '345px',
                            marginLeft: '0px',
                            marginTop: '-0.144px',
                          }}
                          src='https://images.broniboy.ru/-WAvLAfhsBKJaff_063zxBUp0gw=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/8d783828-84b1-4fc0-8d3e-022654859f98/ed97ddba3139ea9e714c59b69e5a26a0.jpg'
                        />

                        <div className='restaurant-box-top-about clearfix'>
                          <img
                            data-src='https://images.broniboy.ru/Ob2GqgHyq-S8WpGmah55LIizUBU=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/f3f67be4-d116-4dd9-ba3d-015631921c40/f3532da7b7e0a9dc20aa7e574426ce46.jpg'
                            alt='Три апельсина'
                            className=' lazyloaded'
                            src='https://images.broniboy.ru/Ob2GqgHyq-S8WpGmah55LIizUBU=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/f3f67be4-d116-4dd9-ba3d-015631921c40/f3532da7b7e0a9dc20aa7e574426ce46.jpg'
                          />
                        </div>
                      </a>
                    </div>
                    <div className='restaurant-box-second'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_tri-apelsina/'
                        className='restaurant-box-second__link'
                        title='Три апельсина'
                      >
                        <div className='restaurant-box-second__title'>Три апельсина</div>
                      </a>
                      <div className='restaurant-box-second__description'>
                        <span
                          className='restaurant-box-second__rating'
                          style={{ color: '#76C032' }}
                        >
                          <span>5.0</span>
                          <svg width={12} height={12}>
                            <path
                              id='Path_11'
                              data-name='Path 11'
                              fill='#76C032'
                              d='M5.877.27a.438.438,0,0,1,.4-.27A.526.526,0,0,1,6.72.27L8.271,3.44a.522.522,0,0,0,.371.27l3.474.506a.581.581,0,0,1,.4.337.485.485,0,0,1-.135.506L9.857,7.521a.5.5,0,0,0-.135.438l.607,3.474a.488.488,0,0,1-.708.506l-3.1-1.653a.5.5,0,0,0-.438,0l-3.1,1.653a.458.458,0,0,1-.506-.034.518.518,0,0,1-.2-.472l.607-3.474a.531.531,0,0,0-.135-.438L.211,5.059a.564.564,0,0,1-.135-.506.522.522,0,0,1,.4-.337L3.955,3.71a.522.522,0,0,0,.371-.27Zm0,0'
                              transform='translate(-0.064)'
                            />
                          </svg>
                        </span>
                        <span className='restaurant-box-second__info'>Китайская кухня, </span>
                        <span className='restaurant-box-second__info'>₽₽₽</span>
                        <div className='restaurant-box-second__delivery'>
                          <div>
                            <img
                              src='https://broniboy.ru/img/icons/delivery/default.svg'
                              className='restaurant-box-second__delivery-icon delivery_type--default'
                              alt='Доставка от Broniboy'
                              title='Доставка от Broniboy'
                            />
                            <span className='restaurant-box-second__info'>
                              190 ₽, бесплатно от 1499 ₽
                            </span>
                          </div>
                          <div>
                            <span className='restaurant-box-second__delivery-time'>40-50 мин</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                  <div
                    className='restaurant-box '
                    data-place-data='{"id":"d74b9aa1-54fa-4b74-a590-eab62f61b1d8","name":"Coffee Cake","delivery_type":"default","delivery_time":null,"index":1}'
                  >
                    <div className='restaurant-box-top'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_coffee-cake/'
                        title='Coffee Cake'
                      >
                        <img
                          data-src='https://images.broniboy.ru/f3AUvGYSqL6R3EyxZF2FrdUxjNk=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/15561811-2d7c-4842-80af-daf6f2f208b5/531e7c7d5d32ee14f51cce3acedd0e31.jpg'
                          title='Coffee Cake'
                          alt='Coffee Cake'
                          className='restaurant-cover-image transition lazyloaded'
                          style={{
                            width: 'auto',
                            height: '194.062px',
                            marginLeft: '-0.25549px',
                            marginTop: '0px',
                          }}
                          src='https://images.broniboy.ru/f3AUvGYSqL6R3EyxZF2FrdUxjNk=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/15561811-2d7c-4842-80af-daf6f2f208b5/531e7c7d5d32ee14f51cce3acedd0e31.jpg'
                        />

                        <div className='restaurant-box-top-about clearfix'>
                          <img
                            data-src='https://images.broniboy.ru/obpElyUNr3IHaRZSn3NPnRFA6hc=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/023be32f-8d3b-490b-9e75-68858b71af85/6cbac6aa3e6fae78a6d98f149a5b5e4f.png'
                            alt='Coffee Cake'
                            className=' lazyloaded'
                            src='https://images.broniboy.ru/obpElyUNr3IHaRZSn3NPnRFA6hc=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/023be32f-8d3b-490b-9e75-68858b71af85/6cbac6aa3e6fae78a6d98f149a5b5e4f.png'
                          />
                        </div>
                      </a>
                    </div>
                    <div className='restaurant-box-second'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_coffee-cake/'
                        className='restaurant-box-second__link'
                        title='Coffee Cake'
                      >
                        <div className='restaurant-box-second__title'>Coffee Cake</div>
                      </a>
                      <div className='restaurant-box-second__description'>
                        <div className='restaurant-box-second__delivery'>
                          <div>
                            <img
                              src='https://broniboy.ru/img/icons/delivery/default.svg'
                              className='restaurant-box-second__delivery-icon delivery_type--default'
                              alt='Доставка от Broniboy'
                              title='Доставка от Broniboy'
                            />
                            <span className='restaurant-box-second__info'>
                              190 ₽, бесплатно от 1499 ₽
                            </span>
                          </div>
                          <div>
                            <span className='restaurant-box-second__delivery-time'>30-40 мин</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                  <div
                    className='restaurant-box '
                    data-place-data='{"id":"f80fc6c0-7aad-493a-841c-36d60836d54d","name":"\u0413\u043e\u0440\u044f\u0447\u043e","delivery_type":"default","delivery_time":null,"index":2}'
                  >
                    <div className='restaurant-box-top'>
                      <a href='https://broniboy.ru/nn/restaurants/p_goriacho/' title='Горячо'>
                        <img
                          data-src='https://images.broniboy.ru/sFaUjr6vmXWBTfdAbjpZTLwvygE=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/24aa9880-0d66-43ac-a9ea-f743520af272/c3a2e996eaf9d5b540a8e9e2a1d68833.jpg'
                          title='Горячо'
                          alt='Горячо'
                          className='restaurant-cover-image transition lazyloaded'
                          style={{
                            width: 'auto',
                            height: '194.062px',
                            marginLeft: '-0.25549px',
                            marginTop: '0px',
                          }}
                          src='https://images.broniboy.ru/sFaUjr6vmXWBTfdAbjpZTLwvygE=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/24aa9880-0d66-43ac-a9ea-f743520af272/c3a2e996eaf9d5b540a8e9e2a1d68833.jpg'
                        />

                        <div className='restaurant-box-top-about clearfix'>
                          <img
                            data-src='https://images.broniboy.ru/4md7Y8OtXjkog1F-XD7Py9cPZWc=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/52036516-238e-42d3-98af-e6bd16799605/bec1b00362b1055ecccfc3fec8015e1a.jpg'
                            alt='Горячо'
                            className=' lazyloaded'
                            src='https://images.broniboy.ru/4md7Y8OtXjkog1F-XD7Py9cPZWc=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/52036516-238e-42d3-98af-e6bd16799605/bec1b00362b1055ecccfc3fec8015e1a.jpg'
                          />
                        </div>
                      </a>
                    </div>
                    <div className='restaurant-box-second'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_goriacho/'
                        className='restaurant-box-second__link'
                        title='Горячо'
                      >
                        <div className='restaurant-box-second__title'>Горячо</div>
                      </a>
                      <div className='restaurant-box-second__description'>
                        <div className='restaurant-box-second__delivery'>
                          <div>
                            <img
                              src='https://broniboy.ru/img/icons/delivery/default.svg'
                              className='restaurant-box-second__delivery-icon delivery_type--default'
                              alt='Доставка от Broniboy'
                              title='Доставка от Broniboy'
                            />
                            <span className='restaurant-box-second__info'>
                              190 ₽, бесплатно от 1499 ₽
                            </span>
                          </div>
                          <div>
                            <span className='restaurant-box-second__delivery-time'>40-50 мин</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                  <div
                    className='restaurant-box '
                    data-place-data='{"id":"69ac4d05-3076-4084-aadd-4abf4f6f474d","name":"\u041c\u0430\u0434\u0436\u043e\u043d\u0433","delivery_type":"default","delivery_time":null,"index":3}'
                  >
                    <div className='restaurant-box-top'>
                      <a href='https://broniboy.ru/nn/restaurants/p_madzhong/' title='Маджонг'>
                        <img
                          data-src='https://images.broniboy.ru/5hvcxSz9BSJhPQsKdjPnkc2VRzs=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/69cdd48e-d27c-46aa-a641-e4795d5be687/d34b859c8ec2a2aaaa313566de87c2c2.jpg'
                          title='Маджонг'
                          alt='Маджонг'
                          className='restaurant-cover-image transition lazyloaded'
                          style={{
                            height: 'auto',
                            width: '345px',
                            marginLeft: '0px',
                            marginTop: '-32.344px',
                          }}
                          src='https://images.broniboy.ru/5hvcxSz9BSJhPQsKdjPnkc2VRzs=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/69cdd48e-d27c-46aa-a641-e4795d5be687/d34b859c8ec2a2aaaa313566de87c2c2.jpg'
                        />

                        <div className='restaurant-box-top-about clearfix'>
                          <img
                            data-src='https://images.broniboy.ru/vRXx6SIbQj7BoMD1iOQDOcrI6Z4=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/6c5c9c30-116e-4230-a299-ade51078d3e1/6c4d15d9f6d5bf581f60f017507b979f.jpg'
                            alt='Маджонг'
                            className=' lazyloaded'
                            src='https://images.broniboy.ru/vRXx6SIbQj7BoMD1iOQDOcrI6Z4=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/6c5c9c30-116e-4230-a299-ade51078d3e1/6c4d15d9f6d5bf581f60f017507b979f.jpg'
                          />
                        </div>
                      </a>
                    </div>
                    <div className='restaurant-box-second'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_madzhong/'
                        className='restaurant-box-second__link'
                        title='Маджонг'
                      >
                        <div className='restaurant-box-second__title'>Маджонг</div>
                      </a>
                      <div className='restaurant-box-second__description'>
                        <div className='restaurant-box-second__delivery'>
                          <div>
                            <img
                              src='https://broniboy.ru/img/icons/delivery/default.svg'
                              className='restaurant-box-second__delivery-icon delivery_type--default'
                              alt='Доставка от Broniboy'
                              title='Доставка от Broniboy'
                            />
                            <span className='restaurant-box-second__info'>
                              190 ₽, бесплатно от 1499 ₽
                            </span>
                          </div>
                          <div>
                            <span className='restaurant-box-second__delivery-time'>40-50 мин</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                  <div
                    className='restaurant-box '
                    data-place-data='{"id":"8e21e30a-64a2-4616-a816-9b819fb66be1","name":"\u042e\u043b\u0430 \u041f\u0438\u0446\u0446\u0430","delivery_type":"default","delivery_time":null,"index":4}'
                  >
                    <div className='restaurant-box-top'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_iula-pitstsa/'
                        title='Юла Пицца'
                      >
                        <img
                          data-src='https://images.broniboy.ru/hOpWXDMLFgOYkNlAmsWcKTY5jXc=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/f64318f0-dc33-4954-a71f-25615a434666/b9e85c817f880f1df00caa59f0b72e78.jpg'
                          title='Юла Пицца'
                          alt='Юла Пицца'
                          className='restaurant-cover-image transition lazyloaded'
                          style={{
                            height: 'auto',
                            width: '345px',
                            marginLeft: '0px',
                            marginTop: '-0.144px',
                          }}
                          src='https://images.broniboy.ru/hOpWXDMLFgOYkNlAmsWcKTY5jXc=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/f64318f0-dc33-4954-a71f-25615a434666/b9e85c817f880f1df00caa59f0b72e78.jpg'
                        />

                        <div className='restaurant-box-top-about clearfix'>
                          <img
                            data-src='https://images.broniboy.ru/qRpnR25hwoa5c4rMu-UjjIfodXU=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/9c39e6fa-3b0a-447c-a7a1-1e3854fbb559/62c0eab3d4f60318e57cf79f632e1ecd.jpg'
                            alt='Юла Пицца'
                            className=' lazyloaded'
                            src='https://images.broniboy.ru/qRpnR25hwoa5c4rMu-UjjIfodXU=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/9c39e6fa-3b0a-447c-a7a1-1e3854fbb559/62c0eab3d4f60318e57cf79f632e1ecd.jpg'
                          />
                        </div>
                      </a>
                    </div>
                    <div className='restaurant-box-second'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_iula-pitstsa/'
                        className='restaurant-box-second__link'
                        title='Юла Пицца'
                      >
                        <div className='restaurant-box-second__title'>Юла Пицца</div>
                      </a>
                      <div className='restaurant-box-second__description'>
                        <div className='restaurant-box-second__delivery'>
                          <div>
                            <img
                              src='https://broniboy.ru/img/icons/delivery/default.svg'
                              className='restaurant-box-second__delivery-icon delivery_type--default'
                              alt='Доставка от Broniboy'
                              title='Доставка от Broniboy'
                            />
                            <span className='restaurant-box-second__info'>
                              190 ₽, бесплатно от 1499 ₽
                            </span>
                          </div>
                          <div>
                            <span className='restaurant-box-second__delivery-time'>40-50 мин</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                  <div
                    className='restaurant-box '
                    data-place-data='{"id":"29edee55-027d-49f2-b309-6138ef7ab6b1","name":"AMO","delivery_type":"default","delivery_time":null,"index":5}'
                  >
                    <div className='restaurant-box-top'>
                      <a href='https://broniboy.ru/nn/restaurants/p_amo/' title='AMO'>
                        <img
                          data-src='https://images.broniboy.ru/aQhFrWTFeTCiCBmzCB3V2YFrmes=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/3587d803-0e5b-482c-a1d4-a83dae4c1a42/96b53352605564791ad28d444b197590.jpg'
                          title='AMO'
                          alt='AMO'
                          className='restaurant-cover-image transition lazyloaded'
                          style={{
                            width: 'auto',
                            height: '194.062px',
                            marginLeft: '-0.25549px',
                            marginTop: '0px',
                          }}
                          src='https://images.broniboy.ru/aQhFrWTFeTCiCBmzCB3V2YFrmes=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/3587d803-0e5b-482c-a1d4-a83dae4c1a42/96b53352605564791ad28d444b197590.jpg'
                        />

                        <div className='restaurant-box-top-about clearfix'>
                          <img
                            data-src='https://images.broniboy.ru/7U16BGBxJi56m5CCKKJKLSELTPE=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/09a4ad94-8dbe-421b-9e2d-07e2f8bcf7a1/2834de8094ec8f807a077b862998a05f.jpg'
                            alt='AMO'
                            className=' lazyloaded'
                            src='https://images.broniboy.ru/7U16BGBxJi56m5CCKKJKLSELTPE=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/09a4ad94-8dbe-421b-9e2d-07e2f8bcf7a1/2834de8094ec8f807a077b862998a05f.jpg'
                          />
                        </div>
                      </a>
                    </div>
                    <div className='restaurant-box-second'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_amo/'
                        className='restaurant-box-second__link'
                        title='AMO'
                      >
                        <div className='restaurant-box-second__title'>AMO</div>
                      </a>
                      <div className='restaurant-box-second__description'>
                        <div className='restaurant-box-second__delivery'>
                          <div>
                            <img
                              src='https://broniboy.ru/img/icons/delivery/default.svg'
                              className='restaurant-box-second__delivery-icon delivery_type--default'
                              alt='Доставка от Broniboy'
                              title='Доставка от Broniboy'
                            />
                            <span className='restaurant-box-second__info'>
                              190 ₽, бесплатно от 1499 ₽
                            </span>
                          </div>
                          <div>
                            <span className='restaurant-box-second__delivery-time'>40-50 мин</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                  <div
                    className='restaurant-box '
                    data-place-data='{"id":"b7aa9960-a2a5-474e-a4aa-c47bee62d779","name":"\u0425\u0430\u0447\u0430\u043f\u0443\u0440\u0438 \u0422\u0435\u0442\u0443\u0448\u043a\u0438 \u041c\u0430\u0440\u0438\u043a\u043e","delivery_type":"default","delivery_time":null,"index":6}'
                  >
                    <div className='restaurant-box-top'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_khachapuri-tetushki-mariko/'
                        title='Хачапури Тетушки Марико'
                      >
                        <img
                          data-src='https://images.broniboy.ru/1H9ugaG_bi_VhpqpR221Q2Y5CLo=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/63e7fe05-088b-4a9c-a74b-05beae6dbc50/821a14c76509b3c393e593628deb9a42.jpg'
                          title='Хачапури Тетушки Марико'
                          alt='Хачапури Тетушки Марико'
                          className='restaurant-cover-image transition lazyloaded'
                          style={{
                            width: 'auto',
                            height: '194.062px',
                            marginLeft: '-0.25549px',
                            marginTop: '0px',
                          }}
                          src='https://images.broniboy.ru/1H9ugaG_bi_VhpqpR221Q2Y5CLo=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/63e7fe05-088b-4a9c-a74b-05beae6dbc50/821a14c76509b3c393e593628deb9a42.jpg'
                        />

                        <div className='restaurant-box-top-about clearfix'>
                          <img
                            data-src='https://images.broniboy.ru/7nPTqgrBJWu4GekQnSbD-BOVjmk=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/dae7399f-7753-45e8-a068-a639c54db827/6cf1fa322329ce470e711b8dd3c2020b.png'
                            alt='Хачапури Тетушки Марико'
                            className=' lazyloaded'
                            src='https://images.broniboy.ru/7nPTqgrBJWu4GekQnSbD-BOVjmk=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/dae7399f-7753-45e8-a068-a639c54db827/6cf1fa322329ce470e711b8dd3c2020b.png'
                          />
                        </div>
                      </a>
                    </div>
                    <div className='restaurant-box-second'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_khachapuri-tetushki-mariko/'
                        className='restaurant-box-second__link'
                        title='Хачапури Тетушки Марико'
                      >
                        <div className='restaurant-box-second__title'>Хачапури Тетушки Марико</div>
                      </a>
                      <div className='restaurant-box-second__description'>
                        <div className='restaurant-box-second__delivery'>
                          <div>
                            <img
                              src='https://broniboy.ru/img/icons/delivery/default.svg'
                              className='restaurant-box-second__delivery-icon delivery_type--default'
                              alt='Доставка от Broniboy'
                              title='Доставка от Broniboy'
                            />
                            <span className='restaurant-box-second__info'>
                              190 ₽, бесплатно от 1499 ₽
                            </span>
                          </div>
                          <div>
                            <span className='restaurant-box-second__delivery-time'>45-55 мин</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                  <div
                    className='restaurant-box '
                    data-place-data='{"id":"79fdbf08-e0e1-47d1-96d6-d712c14256c9","name":"\u0422\u0430 \u0441\u0430\u043c\u0430\u044f \u0448\u0430\u0443\u0440\u043c\u0430 \u043d\u0430 \u0421\u0440\u0435\u0434\u043d\u043e\u043c","delivery_type":"default","delivery_time":null,"index":7}'
                  >
                    <div className='restaurant-box-top'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_ta-samaia-shaurma-na-srednom/'
                        title='Та самая шаурма на Средном'
                      >
                        <img
                          data-src='https://images.broniboy.ru/2eTCTbo6zAsGpxRRzIKb46DYecI=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/59fc7807-391b-4e84-b7b0-6074b4fb5999/dea9124116a662ab9ced974391fe9751.jpg'
                          title='Та самая шаурма на Средном'
                          alt='Та самая шаурма на Средном'
                          className='restaurant-cover-image transition lazyloaded'
                          style={{
                            height: 'auto',
                            width: '345px',
                            marginLeft: '0px',
                            marginTop: '-32.344px',
                          }}
                          src='https://images.broniboy.ru/2eTCTbo6zAsGpxRRzIKb46DYecI=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/59fc7807-391b-4e84-b7b0-6074b4fb5999/dea9124116a662ab9ced974391fe9751.jpg'
                        />

                        <div className='restaurant-box-top-about clearfix'>
                          <img
                            data-src='https://images.broniboy.ru/gZJxfccuKUhOAEEkzlMHJiy5ub4=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/1c275d85-7208-4291-8bc8-57c39be062d6/6849bbc2f40a1d1c60e5e93da6173a7b.jpg'
                            alt='Та самая шаурма на Средном'
                            className=' lazyloaded'
                            src='https://images.broniboy.ru/gZJxfccuKUhOAEEkzlMHJiy5ub4=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/1c275d85-7208-4291-8bc8-57c39be062d6/6849bbc2f40a1d1c60e5e93da6173a7b.jpg'
                          />
                        </div>
                      </a>
                    </div>
                    <div className='restaurant-box-second'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_ta-samaia-shaurma-na-srednom/'
                        className='restaurant-box-second__link'
                        title='Та самая шаурма на Средном'
                      >
                        <div className='restaurant-box-second__title'>
                          Та самая шаурма на Средном
                        </div>
                      </a>
                      <div className='restaurant-box-second__description'>
                        <div className='restaurant-box-second__delivery'>
                          <div>
                            <img
                              src='https://broniboy.ru/img/icons/delivery/default.svg'
                              className='restaurant-box-second__delivery-icon delivery_type--default'
                              alt='Доставка от Broniboy'
                              title='Доставка от Broniboy'
                            />
                            <span className='restaurant-box-second__info'>
                              190 ₽, бесплатно от 1499 ₽
                            </span>
                          </div>
                          <div>
                            <span className='restaurant-box-second__delivery-time'>45-55 мин</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                  <div
                    className='restaurant-box '
                    data-place-data='{"id":"811b86ca-8cab-4cc9-b37b-a73a9000a9c8","name":"Franky bar","delivery_type":"default","delivery_time":null,"index":8}'
                  >
                    <div className='restaurant-box-top'>
                      <a href='https://broniboy.ru/nn/restaurants/p_franky-bar/' title='Franky bar'>
                        <img
                          data-src='https://images.broniboy.ru/LpX3Wbvzd_C5A52HjOeg1zqWTIE=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/b32aa480-958b-42cc-8185-c2ddfd51bc77/ea60386fe90efd8634255fa002060645.jpg'
                          title='Franky bar'
                          alt='Franky bar'
                          className='restaurant-cover-image transition lazyloaded'
                          style={{
                            height: 'auto',
                            width: '345px',
                            marginLeft: '0px',
                            marginTop: '-22.569px',
                          }}
                          src='https://images.broniboy.ru/LpX3Wbvzd_C5A52HjOeg1zqWTIE=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/b32aa480-958b-42cc-8185-c2ddfd51bc77/ea60386fe90efd8634255fa002060645.jpg'
                        />

                        <div className='restaurant-box-top-about clearfix'>
                          <img
                            data-src='https://images.broniboy.ru/RwIyR0-Cw8b_Gs-dRW72qr4xfrg=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/e2aa1256-cbe7-47e1-8c3d-1365fd191b1e/d1b820b12a42687f7cbf0880424cc533.jpg'
                            alt='Franky bar'
                            className=' lazyloaded'
                            src='https://images.broniboy.ru/RwIyR0-Cw8b_Gs-dRW72qr4xfrg=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/e2aa1256-cbe7-47e1-8c3d-1365fd191b1e/d1b820b12a42687f7cbf0880424cc533.jpg'
                          />
                        </div>
                      </a>
                    </div>
                    <div className='restaurant-box-second'>
                      <a
                        href='https://broniboy.ru/nn/restaurants/p_franky-bar/'
                        className='restaurant-box-second__link'
                        title='Franky bar'
                      >
                        <div className='restaurant-box-second__title'>Franky bar</div>
                      </a>
                      <div className='restaurant-box-second__description'>
                        <div className='restaurant-box-second__delivery'>
                          <div>
                            <img
                              src='https://broniboy.ru/img/icons/delivery/default.svg'
                              className='restaurant-box-second__delivery-icon delivery_type--default'
                              alt='Доставка от Broniboy'
                              title='Доставка от Broniboy'
                            />
                            <span className='restaurant-box-second__info'>
                              190 ₽, бесплатно от 1499 ₽
                            </span>
                          </div>
                          <div>
                            <span className='restaurant-box-second__delivery-time'>50-60 мин</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <noscript />
            </div>
            <a
              href='https://broniboy.ru/nn/restaurants/'
              title='Посмотреть все рестораны'
              data-actor='watch-all-restaurants-btn'
              className='peach-btn peach-btn--category'
            >
              Посмотреть все рестораны
            </a>
          </div>
        </section>
        <section className='promo-block'>
          <div className='container'>
            <div className='promo-block__info'>
              <picture>
                <source
                  srcSet='https://broniboy.ru/img/content/mobile-app.webp, /img/content/mobile-app@2x.webp 2x'
                  type='image/webp'
                />
                <img
                  src='https://broniboy.ru/img/content/mobile-app.png'
                  srcSet='https://broniboy.ru/img/content/mobile-app@2x.png 2x'
                  alt='Приложение Broniboy'
                  className='img-responsive'
                />
              </picture>
            </div>
            <div className='promo-block__info'>
              <div className='promo-item'>
                <div className='promo-item__description'>
                  <div className='promo-item__title'>С приложением еще лучше</div>
                  <ul className='promo-item__list'>
                    <li>Отслеживайте курьера на карте</li>
                    <li>Повторяйте прошлый заказ в один клик</li>
                    <li>Получайте информацию об акциях и скидках</li>
                  </ul>
                  <hr />
                  <div className='promo-item__apps'>
                    <a
                      href='https://app.adjust.com/e0ifxiw?deep_link=broniboy%3A%2F%2Fapp&is_organic=1&fallback=https://play.google.com/store/apps/details?id=com.broniboy.client&redirect_macos=https://play.google.com/store/apps/details?id=com.broniboy.client'
                      title='Broniboy'
                      className='app-btn app-btn_google-play'
                    />
                    <a
                      href='https://app.adjust.com/e0ifxiw?deep_link=broniboy%3A%2F%2Fapp&is_organic=1&fallback=https://itunes.apple.com/app/id1262921130&redirect_macos=https://itunes.apple.com/app/id1262921130'
                      title='Broniboy'
                      className='app-btn app-btn_app-store'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container promo-partners'>
          <div className='row'>
            <div className='col-lg-4 promo-partner'>
              <div className='promo-partner__icon'>
                <svg
                  width={83}
                  height={57}
                  viewBox='0 0 83 57'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M36.2011 32.0054C29.7331 30.8254 24.6377 35.2207 22.1777 37.9462C21.8825 38.2721 21.9093 38.7757 22.2371 39.071C22.5649 39.3643 23.069 39.3386 23.3651 39.0107C25.6023 36.5341 30.2105 32.5318 35.9149 33.5716C38.8761 34.1118 40.021 36.7987 40.1041 39.1322C40.119 39.5628 40.4736 39.8995 40.9014 39.8995C40.9103 39.8995 40.9202 39.8995 40.9301 39.8995C41.3708 39.8837 41.7145 39.5154 41.6996 39.0759C41.5659 35.3659 39.4079 32.59 36.2011 32.0054Z'
                    fill='#F2630C'
                  />
                  <path
                    d='M67.824 47.4646C67.7071 48.8027 68.1231 50.0627 68.9966 51.0137C69.8661 51.9587 71.0803 52.4811 72.4153 52.4811C75.1121 52.4811 77.4988 50.2938 77.7345 47.6048C77.8514 46.2678 77.4354 45.0087 76.561 44.0577C75.6914 43.1127 74.4772 42.5923 73.1422 42.5923C70.4455 42.5923 68.0597 44.7776 67.824 47.4646ZM73.1422 44.1831C74.0256 44.1831 74.8209 44.5209 75.3844 45.1341C75.9519 45.7513 76.2223 46.5788 76.144 47.4636C75.9796 49.3517 74.3059 50.8873 72.4153 50.8873C71.5329 50.8873 70.7376 50.5496 70.1731 49.9363C69.6067 49.3172 69.3363 48.4896 69.4135 47.6029C69.5789 45.7187 71.2516 44.1831 73.1422 44.1831Z'
                    fill='#F2630C'
                  />
                  <path
                    d='M82.755 40.7082C81.0625 36.1272 78.0686 34.085 73.0465 34.085C71.6927 34.085 70.4538 34.3438 69.3951 34.7269C70.1002 33.1469 70.226 31.4849 69.7793 29.6837C69.5555 28.79 68.7969 26.4674 67.9937 24.0076C67.5966 22.789 67.1886 21.5418 66.8409 20.4506C67.041 20.4644 67.242 20.4743 67.4401 20.4743C68.272 20.4743 69.0445 20.3094 69.3475 19.6014C69.8437 18.446 70.0863 15.6583 69.7972 14.4594L69.7843 14.3953C69.5664 13.228 68.5503 12.9891 67.0895 12.9891C66.1744 12.9891 65.6268 13.1688 64.9127 13.707L59.0409 14.8604C60.2491 13.8432 61.5653 12.6671 62.3952 11.7813C62.413 11.7744 62.4309 11.7715 62.4477 11.7636C63.3024 11.3696 64.2502 11.0042 64.57 10.9439C64.6206 10.9667 64.6958 11.0052 64.7562 11.0358C65.196 11.2619 65.9328 11.6411 67.1579 11.494C68.8702 11.2896 70.2686 9.41726 70.8291 7.61409C71.8522 7.70988 72.6692 7.7948 72.688 7.79678C72.7009 7.79776 72.7128 7.79678 72.7257 7.79678C72.7573 7.79875 72.788 7.79776 72.8187 7.79678C72.8395 7.79579 72.8584 7.79381 72.8792 7.79085C72.9128 7.7869 72.9445 7.77999 72.9772 7.7711C72.996 7.76616 73.0138 7.76123 73.0317 7.7553C73.0614 7.74444 73.0921 7.73259 73.1198 7.71876C73.1386 7.70988 73.1555 7.70099 73.1733 7.69111C73.1981 7.6763 73.2238 7.65951 73.2476 7.64174C73.2664 7.6289 73.2822 7.61606 73.2981 7.60125C73.3189 7.58249 73.3397 7.56274 73.3595 7.542C73.3763 7.52423 73.3912 7.50645 73.405 7.48769C73.4219 7.46695 73.4357 7.44523 73.4496 7.4235C73.4645 7.40079 73.4763 7.37808 73.4872 7.35438C73.4991 7.33265 73.508 7.30994 73.517 7.28624C73.5278 7.25958 73.5368 7.23291 73.5427 7.20428C73.5467 7.19243 73.5516 7.18156 73.5546 7.16873C73.5566 7.15688 73.5566 7.14503 73.5576 7.13317C73.5605 7.11836 73.5665 7.10355 73.5675 7.08874C73.5694 7.07096 73.5665 7.05418 73.5675 7.03739C73.6021 6.52784 73.2189 6.09235 72.7752 5.59564C72.6454 5.45048 72.4375 5.21841 72.3543 5.09497C72.1988 3.27007 71.0965 1.064 68.4701 0.694673C65.2593 0.242398 62.6993 1.96559 61.6465 5.22138C61.5049 5.2036 61.3613 5.19669 61.2197 5.18286C61.1711 5.17496 61.1236 5.16114 61.0751 5.1562C61.0186 5.15028 60.9651 5.15028 60.9117 5.1562C55.4122 4.72071 49.4255 6.83989 44.9689 10.8817C39.7992 15.5724 38.6137 20.5138 39.7011 23.1208C39.8259 23.421 40.0973 23.7301 40.4677 24.0372H37.8363L38.7415 13.7198C38.7613 13.4976 38.686 13.2764 38.5345 13.1125C38.384 12.9476 38.1701 12.8538 37.9462 12.8538H34.1254L32.8013 5.00215C32.7894 4.93401 32.7696 4.86884 32.7409 4.80564C31.7288 2.57784 29.648 1.23484 27.1771 1.2141C25.4023 1.19534 23.8693 1.92214 23.3513 3.01332C23.2681 3.18712 23.1839 3.43005 23.1612 3.72334C21.5558 3.52781 19.9385 4.11537 19.3374 5.27964C19.1651 5.61341 18.8363 6.52191 19.6246 7.56866C19.1958 7.7474 18.7937 8.01995 18.4471 8.38138C17.5934 9.27013 17.3517 10.4206 17.8291 11.3123C18.2688 12.1319 19.4216 12.994 22.4065 12.5269L23.1206 12.9051C22.8403 13.0098 22.6323 13.2665 22.6046 13.5806L21.6231 24.764C21.6033 24.9862 21.6786 25.2064 21.8301 25.3713C21.9807 25.5352 22.1946 25.6291 22.4184 25.6291H27.7693C27.7228 25.7219 27.6762 25.8147 27.6416 25.9125L26.5769 28.8977C26.5551 28.9599 26.5432 29.0211 26.5373 29.0833C18.2945 35.0538 14.3123 42.7898 15.1947 45.5094C15.4265 46.2254 15.9999 46.651 16.7258 46.651H19.6196C19.5711 46.9225 19.5345 47.1971 19.5107 47.4666C19.2998 49.8702 20.0455 52.1306 21.6103 53.8331C23.1671 55.5286 25.3459 56.4618 27.7445 56.4618C32.6419 56.4618 36.9757 52.4891 37.4045 47.6049C37.4332 47.2869 37.4392 46.967 37.4332 46.65H57.5969C59.2399 46.65 60.3897 46.2836 61.3068 45.6783C61.3811 45.8215 61.4712 45.9498 61.5772 46.0664C61.9238 46.4446 62.4279 46.651 62.9964 46.651H63.9461C63.8966 46.9225 63.858 47.1951 63.8352 47.4666C63.6243 49.8702 64.37 52.1306 65.9348 53.8331C67.4916 55.5286 69.6694 56.4618 72.069 56.4618C76.9664 56.4618 81.3002 52.4891 81.729 47.6049C81.9182 45.4393 81.3309 43.4001 80.0919 41.7895C81.2665 41.7856 82.0123 41.7816 82.0123 41.7816C82.2717 41.7796 82.5154 41.6522 82.6639 41.438C82.8105 41.2227 82.8451 40.9531 82.755 40.7082ZM66.9677 9.91398C66.2259 10.0019 65.8516 9.8093 65.4881 9.62168C65.2752 9.51206 65.0543 9.3985 64.7879 9.35801C64.6721 9.34024 64.3987 9.30074 63.552 9.58909C63.6322 9.11805 63.647 8.62529 63.5777 8.13549C63.9283 8.18486 64.3086 8.22338 64.6641 8.22338C65.189 8.22338 65.7298 7.95873 66.2527 7.70395C66.5171 7.57459 66.9588 7.35833 67.1103 7.35438C67.559 7.35438 68.3463 7.40573 69.1891 7.47288C68.7058 8.74379 67.762 9.81918 66.9677 9.91398ZM68.2453 2.26974C70.4785 2.58277 70.739 4.856 70.7687 5.30827C70.7855 5.56601 70.8994 5.79906 71.0698 6.03705C69.707 5.90966 67.9333 5.76055 67.1123 5.76055C66.5973 5.76055 66.0655 6.02125 65.5515 6.27306C65.2791 6.40638 64.8226 6.62955 64.6651 6.63054C64.0739 6.63054 63.344 6.48933 62.9607 6.40638C62.9766 6.36984 62.9904 6.3333 63.0003 6.29479C63.6975 3.4103 65.6614 1.90634 68.2453 2.26974ZM46.0424 12.0578C50.2297 8.2609 55.846 6.28788 60.9602 6.75101C61.4296 6.84285 61.7039 7.38499 61.803 7.62298C62.1793 8.53839 62.0803 9.69278 61.5742 10.309C60.4026 11.7349 56.6779 14.7883 55.6697 15.523L54.5783 15.7373C54.1455 15.8222 53.8643 16.2409 53.9494 16.6724C54.0356 17.104 54.4535 17.3834 54.8863 17.2995L65.0652 15.2988C65.3227 15.4627 65.704 15.7679 65.6763 16.076C65.6555 16.309 65.0722 16.7188 64.4235 16.9786C63.8194 16.7317 62.5299 16.3574 61.2117 16.946C59.3509 17.7755 54.0673 19.8571 52.7095 19.9519C52.249 19.9815 51.8212 19.8532 51.527 19.5954C51.2438 19.3466 51.0863 18.9802 51.0586 18.5072C51.0071 17.5819 53.5295 13.0977 55.843 11.1572C56.1807 10.8748 56.2243 10.3722 55.9411 10.0354C55.6578 9.69969 55.1537 9.65525 54.816 9.93867C52.4203 11.9482 49.37 16.8828 49.4651 18.5961C49.476 18.7788 49.5017 18.9526 49.5354 19.1224C49.4978 19.1145 49.4592 19.1046 49.4235 19.0977C48.1717 18.7649 43.9161 18.0707 41.3867 18.5714C42.0909 16.5836 43.5992 14.2738 46.0424 12.0578ZM50.2772 30.4155C50.5802 30.3128 50.7991 30.0343 50.815 29.7005C50.8348 29.665 50.8585 29.6353 50.8714 29.5958L51.422 28.0544C52.0995 28.159 52.7481 28.2538 53.2661 28.3269C52.1222 30.4599 49.4592 35.4784 48.0221 38.5989C47.4923 39.7523 47.4141 40.6914 47.4052 41.2414H46.9674C46.0711 41.2414 45.3749 40.6667 45.056 39.6634C44.34 37.4099 45.6859 33.689 50.2772 30.4155ZM49.472 39.2635C51.3052 35.2848 55.1745 28.1452 55.2141 28.0721C55.3389 27.842 55.3419 27.5646 55.224 27.3315C55.1042 27.0985 54.8764 26.9385 54.616 26.9039C54.5773 26.899 50.7268 26.3963 48.7798 25.9658C46.3633 25.4306 41.567 23.342 41.1748 22.5066C40.9341 21.9299 40.8599 21.2001 40.9549 20.3706C41.569 19.7505 46.3088 19.9065 49.0264 20.6382C49.0353 20.6402 49.0452 20.6402 49.0521 20.6422C49.059 20.6442 49.068 20.6481 49.0759 20.6491C51.2537 21.0875 56.6541 23.8516 57.6791 24.9052C59.34 26.6136 58.93 27.4974 58.0604 28.9135C57.0928 30.4876 51.7875 38.4083 51.734 38.4893C51.5815 38.7164 51.5567 39.0077 51.6706 39.2585C51.7835 39.5074 52.0182 39.6832 52.2906 39.7197C52.9957 39.8145 54.5902 40.246 55.023 40.964C55.0666 41.0351 55.1072 41.1239 55.122 41.2414H49.0016C49.0105 40.806 49.0789 40.1196 49.472 39.2635ZM56.7185 41.2138C56.6987 40.8376 56.5917 40.4771 56.3917 40.1453C55.8222 39.2023 54.6288 38.6818 53.7088 38.4073C55.1706 36.2239 58.6358 31.0287 59.4232 29.7459C60.4799 28.0228 61.2306 26.2719 58.825 23.7982C58.1684 23.1228 56.4451 22.0869 54.5823 21.1507C56.7947 20.497 59.9768 19.2024 61.3246 18.6316C62.1159 21.1863 64.0125 27.3177 64.5235 29.109C65.1999 31.4751 64.3027 33.1607 63.5688 34.2213C63.1875 34.7733 62.9122 35.1742 62.6705 35.5268C62.1308 36.3099 61.7594 36.854 60.7512 38.2789C59.3845 40.2125 58.7794 41.0568 56.7185 41.2138ZM26.4214 12.8518L24.0614 11.5996L31.4218 6.42613L32.5052 12.8508H26.4214V12.8518ZM25.645 5.95904C26.1045 5.42283 27.9862 5.33198 29.4054 5.89683L26.6839 7.80961C25.6995 6.86063 25.44 6.19703 25.645 5.95904ZM25.0745 8.9403L23.0136 10.389C22.2599 9.89522 22.0866 9.53774 22.0906 9.42911C22.0936 9.36196 22.2223 9.19903 22.5541 9.04992C23.2117 8.75366 24.205 8.69639 25.0745 8.9403ZM24.7943 3.69174C25.0052 3.24736 25.9589 2.80397 27.1642 2.80397C27.7842 2.80891 29.7431 2.98469 30.9335 4.82243L30.8711 4.86686C29.2331 3.8685 26.5215 3.5762 25.03 4.43829C25.0211 4.42644 25.0181 4.41261 25.0082 4.40076C24.6566 3.98108 24.7596 3.76382 24.7943 3.69174ZM20.7556 6.00644C21.0794 5.37839 22.7106 4.94685 24.0317 5.61934C24.0376 5.6223 24.0446 5.62427 24.0515 5.62724C23.9327 6.03606 23.9346 6.55746 24.2367 7.20329C23.4513 7.16675 22.6947 7.29118 22.0797 7.53213C21.0933 6.98011 20.5625 6.3807 20.7556 6.00644ZM19.2364 10.5598C19.0957 10.2991 19.2492 9.84485 19.5988 9.48046C19.8395 9.23063 20.1802 9.01831 20.5724 8.94228C20.5308 9.07756 20.5021 9.2168 20.4961 9.36098C20.4714 9.94459 20.7387 10.5094 21.2884 11.0486C20.0336 11.1276 19.3988 10.864 19.2364 10.5598ZM24.1297 14.4436H26.2204C26.2204 14.4436 26.2214 14.4436 26.2224 14.4436C26.2224 14.4436 26.2224 14.4436 26.2234 14.4436H37.0747L36.2329 24.0342H30.2204H23.2879L24.1297 14.4436ZM36.9648 25.6271H43.1833C45.2343 26.5771 47.5725 27.3295 48.4341 27.5201C48.8382 27.61 49.3185 27.7008 49.8206 27.7897L49.4364 28.87H28.2784L29.1449 26.4428C29.2964 26.0162 29.8094 25.6271 30.2214 25.6271H36.9648ZM35.813 47.4647C35.4545 51.548 31.8337 54.867 27.7436 54.867C25.7975 54.867 24.0376 54.1165 22.7858 52.7567C21.5271 51.385 20.9289 49.5572 21.1002 47.6029C21.128 47.2849 21.1844 46.966 21.2527 46.648H23.6435C23.5751 46.9156 23.5246 47.1901 23.4999 47.4637C23.383 48.8017 23.799 50.0618 24.6734 51.0128C25.543 51.9578 26.7572 52.4802 28.0922 52.4802C30.7899 52.4802 33.1757 50.2929 33.4114 47.6029C33.4401 47.281 33.4342 46.963 33.4005 46.648H35.8348C35.8397 46.9186 35.8368 47.1921 35.813 47.4647ZM31.7892 46.648C31.8318 46.9146 31.8446 47.1862 31.8209 47.4637C31.6555 49.3518 29.9828 50.8873 28.0922 50.8873C27.2098 50.8873 26.4145 50.5496 25.85 49.9364C25.2825 49.3172 25.0131 48.4897 25.0904 47.6049C25.1191 47.277 25.1934 46.9591 25.3122 46.648H31.7892ZM16.7268 45.0552C16.6931 44.9781 16.6218 44.7372 16.702 44.1773C17.0734 41.595 20.2931 35.6137 27.3464 30.4619H47.6468C43.5398 34.0712 42.802 37.8316 43.5348 40.1443C44.0617 41.8033 45.3759 42.8353 46.9684 42.8353H55.943C59.4865 42.8353 60.4531 41.4656 62.0575 39.1973C63.0726 37.7625 63.447 37.2144 63.9897 36.4254C64.2304 36.0748 64.5057 35.6729 64.885 35.1239C66.323 33.0452 66.7072 30.9339 66.0605 28.6725C65.5495 26.8822 63.6787 20.8268 62.8726 18.2277C63.5024 18.2663 63.9897 18.527 63.9937 18.5289C64.1858 18.6376 64.4175 18.6622 64.6285 18.5951C65.0464 18.4638 67.1351 17.73 67.2688 16.2123C67.3262 15.5645 67.0598 15.0203 66.6914 14.5997C66.8073 14.5849 66.937 14.5789 67.0935 14.5789C67.7917 14.5789 68.0997 14.649 68.2185 14.6885C68.2284 14.7369 68.2383 14.7843 68.2482 14.8307C68.4325 15.5941 68.2829 17.8555 67.9343 18.843C67.6065 18.9239 66.7865 18.8499 66.4181 18.8173C66.1497 18.7926 65.916 18.7719 65.7308 18.7719C65.7179 18.7719 65.707 18.7748 65.6931 18.7758C65.6674 18.7768 65.6396 18.7798 65.6129 18.7837C65.5842 18.7877 65.5574 18.7926 65.5307 18.8005C65.5188 18.8035 65.5069 18.8035 65.495 18.8074C65.4832 18.8104 65.4733 18.8173 65.4604 18.8222C65.4346 18.8321 65.4079 18.843 65.3821 18.8548C65.3604 18.8667 65.3376 18.8775 65.3168 18.8904C65.296 18.9042 65.2732 18.919 65.2534 18.9338C65.2326 18.9496 65.2118 18.9664 65.192 18.9832C65.1732 19 65.1573 19.0177 65.1395 19.0365C65.1217 19.0563 65.1068 19.075 65.091 19.0967C65.0751 19.1175 65.0623 19.1382 65.0484 19.1599C65.0345 19.1817 65.0226 19.2034 65.0127 19.2261C65.0018 19.2498 64.9919 19.2725 64.983 19.2972C64.9741 19.3219 64.9662 19.3466 64.9603 19.3723C64.9533 19.396 64.9494 19.4187 64.9454 19.4434C64.9404 19.472 64.9385 19.5006 64.9365 19.5303C64.9365 19.5421 64.9335 19.553 64.9335 19.5658C64.9335 19.5777 64.9365 19.5885 64.9365 19.6014C64.9385 19.629 64.9404 19.6576 64.9454 19.6853C64.9494 19.712 64.9543 19.7386 64.9612 19.7653C64.9642 19.7771 64.9652 19.789 64.9692 19.8008C65.3752 21.1112 65.9377 22.8334 66.4804 24.4974C67.241 26.822 68.0254 29.2255 68.2344 30.0649C68.7088 31.9718 68.4047 33.6209 67.2777 35.2523C66.2705 36.7088 64.7374 38.8951 62.7201 41.7461C62.2189 42.4561 61.7911 43.0555 61.3435 43.5453C61.2989 43.5838 61.2593 43.6263 61.2236 43.6746C60.3541 44.5733 59.3746 45.0532 57.5989 45.0532L16.7268 45.0552ZM80.1365 47.4647C79.779 51.548 76.1572 54.867 72.0671 54.867C70.121 54.867 68.3611 54.1165 67.1093 52.7567C65.8506 51.385 65.2524 49.5572 65.4227 47.6029C65.4554 47.2366 65.5208 46.8702 65.606 46.5098C66.4131 46.1938 67.2341 45.3662 68.2156 44.3728C69.3446 43.2313 70.7479 41.8093 71.7412 41.8093C73.8141 41.8093 76.0533 41.8033 77.9102 41.7954C79.5195 43.1809 80.3326 45.2349 80.1365 47.4647ZM71.7402 40.2164C70.0794 40.2164 68.4839 41.831 67.0766 43.2559C66.4161 43.9255 65.3108 45.0443 64.9266 45.0571H62.9944C62.927 45.0571 62.8072 45.0473 62.7527 44.99C62.6933 44.9248 62.6428 44.7609 62.6389 44.4864C63.1162 43.9423 63.5559 43.327 64.0214 42.6674C65.502 40.5749 66.7201 38.8408 67.6649 37.487C67.6887 37.4712 67.7154 37.4563 67.7382 37.4366C68.7048 36.6249 70.6756 35.6759 73.0475 35.6759C77 35.6759 79.3234 37.0011 80.8149 40.1927C78.9283 40.2026 75.1124 40.2164 71.7402 40.2164Z'
                    fill='#F2630C'
                  />
                  <path
                    d='M10.1303 23.6087H18.0155C18.4562 23.6087 18.8137 23.2522 18.8137 22.8128C18.8137 22.3733 18.4562 22.0168 18.0155 22.0168H10.1303C9.68955 22.0168 9.33203 22.3733 9.33203 22.8128C9.33203 23.2522 9.69054 23.6087 10.1303 23.6087Z'
                    fill='#F2630C'
                  />
                  <path
                    d='M20.129 28.2578C20.129 27.8184 19.7715 27.4619 19.3308 27.4619H0.798229C0.35752 27.4619 0 27.8174 0 28.2578C0 28.6983 0.35752 29.0548 0.798229 29.0548H19.3298C19.7715 29.0548 20.129 28.6973 20.129 28.2578Z'
                    fill='#F2630C'
                  />
                  <path
                    d='M12.1963 33.0492H4.86073C4.42002 33.0492 4.0625 33.4037 4.0625 33.8441C4.0625 34.2846 4.42002 34.641 4.86073 34.641H12.1973C12.638 34.641 12.9955 34.2846 12.9955 33.8441C12.9955 33.4037 12.638 33.0492 12.1963 33.0492Z'
                    fill='#F2630C'
                  />
                </svg>
              </div>
              <div className='promo-partner__title'>Курьерам</div>
              <div className='promo-partner__description'>
                Тебе достаточно пары ног и велосипеда, чтобы зарабатывать 20-30 тысяч в месяц и
                развиваться в крутейшей команде спецов
              </div>
              <a
                href='https://broniboy.ru/riders/'
                className='promo-partner__link'
                title='Подробнее'
              >
                Подробнее
                <svg
                  width={44}
                  height={10}
                  viewBox='0 0 44 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M43.4596 5.49136C43.7135 5.23752 43.7135 4.82596 43.4596 4.57212L39.323 0.435544C39.0692 0.181704 38.6576 0.181704 38.4038 0.435544C38.15 0.689385 38.15 1.10094 38.4038 1.35478L42.0808 5.03174L38.4038 8.70869C38.15 8.96253 38.15 9.37409 38.4038 9.62793C38.6576 9.88177 39.0692 9.88177 39.323 9.62793L43.4596 5.49136ZM0 5.68174H43V4.38174H0V5.68174Z'
                    fill='#F2630C'
                  />
                </svg>
              </a>
            </div>
            <div className='col-lg-4 promo-partner'>
              <div className='promo-partner__icon'>
                <svg
                  width={62}
                  height={64}
                  viewBox='0 0 62 64'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M45.5845 47.7572H44.4896C44.2621 44.8298 43.0999 42.0544 41.1758 39.8445C39.2517 37.6346 36.6688 36.1084 33.8117 35.493C34.0152 35.0735 34.122 34.6133 34.1243 34.1466C34.1243 33.3136 33.795 32.5147 33.2088 31.9257C32.6227 31.3367 31.8277 31.0057 30.9987 31.0057C30.1698 31.0057 29.3748 31.3367 28.7887 31.9257C28.2025 32.5147 27.8732 33.3136 27.8732 34.1466C27.8755 34.6133 27.9823 35.0735 28.1858 35.493C25.3286 36.1084 22.7457 37.6346 20.8217 39.8445C18.8976 42.0544 17.7353 44.8298 17.5079 47.7572H16.4129C16.1366 47.7572 15.8716 47.8676 15.6762 48.0639C15.4809 48.2602 15.3711 48.5265 15.3711 48.8042V51.9451C15.3711 52.2228 15.4809 52.4891 15.6762 52.6854C15.8716 52.8818 16.1366 52.9921 16.4129 52.9921H45.5845C45.8609 52.9921 46.1259 52.8818 46.3212 52.6854C46.5166 52.4891 46.6264 52.2228 46.6264 51.9451V48.8042C46.6264 48.5265 46.5166 48.2602 46.3212 48.0639C46.1259 47.8676 45.8609 47.7572 45.5845 47.7572ZM29.9569 34.1466C29.9569 33.9396 30.018 33.7372 30.1325 33.565C30.247 33.3928 30.4097 33.2586 30.6 33.1794C30.7904 33.1001 30.9999 33.0794 31.202 33.1198C31.4041 33.1602 31.5897 33.2599 31.7354 33.4063C31.8811 33.5527 31.9804 33.7393 32.0206 33.9424C32.0608 34.1455 32.0401 34.356 31.9613 34.5473C31.8824 34.7386 31.7489 34.9021 31.5776 35.0172C31.4062 35.1322 31.2048 35.1936 30.9987 35.1936C30.7224 35.1936 30.4574 35.0833 30.262 34.887C30.0667 34.6906 29.9569 34.4243 29.9569 34.1466ZM30.9987 37.2876C33.8562 37.2914 36.6093 38.3668 38.7192 40.3033C40.8291 42.2397 42.1438 44.8979 42.4059 47.7572H23.7892C24.0407 46.015 24.9074 44.4218 26.231 43.2685C27.5547 42.1152 29.2469 41.4788 30.9987 41.4754V39.3815C28.6935 39.3846 26.4701 40.2401 24.7522 41.7847C23.0343 43.3294 21.942 45.4553 21.6836 47.7572H19.5916C19.8537 44.8979 21.1684 42.2397 23.2783 40.3033C25.3882 38.3668 28.1413 37.2914 30.9987 37.2876ZM44.5427 50.8982H17.4548V49.8512H44.5427V50.8982Z'
                    fill='#F2630C'
                  />
                  <path
                    d='M61.1811 20.6031L51.8369 5.57909V3.78458C51.8369 2.95156 51.5076 2.15266 50.9214 1.56363C50.3353 0.974593 49.5403 0.643677 48.7113 0.643677H13.2887C12.4597 0.643677 11.6647 0.974593 11.0786 1.56363C10.4924 2.15266 10.1631 2.95156 10.1631 3.78458V5.57909L0.818851 20.6031C0.285875 21.4267 0.00148476 22.3876 5.79795e-06 23.3701C-0.00147317 24.3525 0.280023 25.3143 0.810517 26.1395C1.28502 26.8439 1.89694 27.4441 2.60918 27.9037C3.32141 28.3634 4.11911 28.6729 4.95393 28.8134V62.4149C4.95393 62.6925 5.06369 62.9588 5.25908 63.1552C5.45446 63.3515 5.71946 63.4618 5.99577 63.4618H56.0042C56.2805 63.4618 56.5455 63.3515 56.7409 63.1552C56.9363 62.9588 57.0461 62.6925 57.0461 62.4149V28.8134C57.8809 28.6729 58.6786 28.3634 59.3908 27.9037C60.1031 27.4441 60.715 26.8439 61.1895 26.1395C61.72 25.3143 62.0015 24.3525 62 23.3701C61.9985 22.3876 61.7141 21.4267 61.1811 20.6031ZM12.2468 3.78458C12.2468 3.50691 12.3566 3.24061 12.552 3.04427C12.7474 2.84792 13.0124 2.73762 13.2887 2.73762H48.7113C48.9876 2.73762 49.2526 2.84792 49.448 3.04427C49.6434 3.24061 49.7532 3.50691 49.7532 3.78458V4.83155H12.2468V3.78458ZM7.03761 61.3679V28.8145C8.1989 28.6157 9.28162 28.0942 10.1631 27.3089C10.4843 27.5917 10.8334 27.8408 11.205 28.0523V56.1331C11.205 56.4107 11.3147 56.677 11.5101 56.8734C11.7055 57.0697 11.9705 57.18 12.2468 57.18H49.7532C50.0295 57.18 50.2945 57.0697 50.4899 56.8734C50.6852 56.677 50.795 56.4107 50.795 56.1331V28.0523C51.1666 27.8408 51.5157 27.5917 51.8369 27.3089C52.7184 28.0942 53.8011 28.6157 54.9624 28.8145V61.3679H7.03761ZM13.2887 28.8145C13.6326 28.8764 13.9811 28.9089 14.3305 28.9118C15.8679 28.9074 17.3504 28.3372 18.4979 27.3089C19.643 28.341 21.1271 28.9118 22.6653 28.9118C24.2035 28.9118 25.6875 28.341 26.8326 27.3089C27.9778 28.341 29.4618 28.9118 31 28.9118C32.5382 28.9118 34.0222 28.341 35.1674 27.3089C36.3125 28.341 37.7965 28.9118 39.3347 28.9118C40.8729 28.9118 42.357 28.341 43.5021 27.3089C44.6496 28.3372 46.1321 28.9074 47.6695 28.9118C48.0189 28.9089 48.3674 28.8764 48.7113 28.8145V55.0861H13.2887V28.8145ZM59.4611 24.9669C59.0899 25.5212 58.5921 25.9783 58.0093 26.2999C57.4265 26.6215 56.7755 26.7983 56.1109 26.8155C55.4462 26.8327 54.787 26.6899 54.1885 26.3989C53.59 26.1079 53.0694 25.6772 52.6703 25.1428C52.5733 25.0127 52.4474 24.9072 52.3028 24.8345C52.1581 24.7618 51.9986 24.724 51.8369 24.724C51.6751 24.724 51.5156 24.7618 51.3709 24.8345C51.2263 24.9072 51.1004 25.0127 51.0034 25.1428C50.6152 25.6629 50.1119 26.085 49.5332 26.3758C48.9545 26.6665 48.3164 26.8179 47.6695 26.8179C47.0225 26.8179 46.3844 26.6665 45.8058 26.3758C45.2271 26.085 44.7238 25.6629 44.3356 25.1428C44.2343 25.0191 44.1071 24.9195 43.963 24.8511C43.8189 24.7827 43.6615 24.7473 43.5021 24.7473C43.3428 24.7473 43.1854 24.7827 43.0413 24.8511C42.8971 24.9195 42.7699 25.0191 42.6686 25.1428C42.2805 25.6629 41.7771 26.085 41.1984 26.3758C40.6198 26.6665 39.9817 26.8179 39.3347 26.8179C38.6878 26.8179 38.0497 26.6665 37.471 26.3758C36.8924 26.085 36.389 25.6629 36.0008 25.1428C35.8996 25.0191 35.7723 24.9195 35.6282 24.8511C35.4841 24.7827 35.3267 24.7473 35.1674 24.7473C35.008 24.7473 34.8506 24.7827 34.7065 24.8511C34.5624 24.9195 34.4352 25.0191 34.3339 25.1428C33.9457 25.6629 33.4424 26.085 32.8637 26.3758C32.285 26.6665 31.647 26.8179 31 26.8179C30.353 26.8179 29.715 26.6665 29.1363 26.3758C28.5576 26.085 28.0543 25.6629 27.6661 25.1428C27.5648 25.0191 27.4376 24.9195 27.2935 24.8511C27.1494 24.7827 26.992 24.7473 26.8326 24.7473C26.6733 24.7473 26.5159 24.7827 26.3718 24.8511C26.2277 24.9195 26.1004 25.0191 25.9992 25.1428C25.611 25.6629 25.1076 26.085 24.529 26.3758C23.9503 26.6665 23.3122 26.8179 22.6653 26.8179C22.0183 26.8179 21.3802 26.6665 20.8016 26.3758C20.2229 26.085 19.7195 25.6629 19.3314 25.1428C19.2301 25.0191 19.1029 24.9195 18.9587 24.8511C18.8146 24.7827 18.6572 24.7473 18.4979 24.7473C18.3385 24.7473 18.1811 24.7827 18.037 24.8511C17.8929 24.9195 17.7657 25.0191 17.6644 25.1428C17.2762 25.6629 16.7729 26.085 16.1942 26.3758C15.6156 26.6665 14.9775 26.8179 14.3305 26.8179C13.6835 26.8179 13.0455 26.6665 12.4668 26.3758C11.8881 26.085 11.3848 25.6629 10.9966 25.1428C10.8954 25.0191 10.7681 24.9195 10.624 24.8511C10.4799 24.7827 10.3225 24.7473 10.1631 24.7473C10.0038 24.7473 9.84639 24.7827 9.70228 24.8511C9.55818 24.9195 9.43092 25.0191 9.32967 25.1428C8.93075 25.6775 8.41028 26.1085 7.81174 26.3998C7.2132 26.6912 6.55398 26.8343 5.88915 26.8173C5.22432 26.8003 4.57319 26.6236 3.99018 26.3021C3.40717 25.9805 2.90921 25.5234 2.53789 24.969C2.23265 24.48 2.07466 23.9127 2.08298 23.3355C2.0913 22.7584 2.26557 22.1959 2.58477 21.716L11.7832 6.92549H50.2168L59.4142 21.7139C59.7334 22.1938 59.9077 22.7563 59.916 23.3334C59.9243 23.9106 59.7663 24.4779 59.4611 24.9669Z'
                    fill='#F2630C'
                  />
                </svg>
              </div>
              <div className='promo-partner__title'>Ресторанам</div>
              <div className='promo-partner__description'>
                Запустим быструю доставку из вашего ресторана за неделю. Потребуется только
                заключить договор и выслать меню.
              </div>
              <a
                href='/broniboy_for_partners.pdf'
                title='Подробнее'
                className='promo-partner__link'
              >
                Подробнее
                <svg
                  width={44}
                  height={10}
                  viewBox='0 0 44 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M43.4596 5.49136C43.7135 5.23752 43.7135 4.82596 43.4596 4.57212L39.323 0.435544C39.0692 0.181704 38.6576 0.181704 38.4038 0.435544C38.15 0.689385 38.15 1.10094 38.4038 1.35478L42.0808 5.03174L38.4038 8.70869C38.15 8.96253 38.15 9.37409 38.4038 9.62793C38.6576 9.88177 39.0692 9.88177 39.323 9.62793L43.4596 5.49136ZM0 5.68174H43V4.38174H0V5.68174Z'
                    fill='#F2630C'
                  />
                </svg>
              </a>
            </div>
            <div className='col-lg-4 promo-partner'>
              <div className='promo-partner__icon'>
                <svg
                  width={60}
                  height={65}
                  viewBox='0 0 60 65'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M51.3073 9.28462L49.2695 9.94604L51.3624 16.3567L53.4001 15.6953L51.3073 9.28462Z'
                    fill='#F2630C'
                  />
                  <path
                    d='M48.1666 16.7642L46.1289 17.4258L48.2222 23.8363L50.2599 23.1747L48.1666 16.7642Z'
                    fill='#F2630C'
                  />
                  <path
                    d='M9.99442 20.5426C9.88259 21.3499 9.94192 22.1715 10.1686 22.9544C10.3952 23.7373 10.7842 24.4641 11.3102 25.0877L12.8575 27.0226V44.8739H15.0006V28.7075L16.5489 29.7364C16.725 29.8536 16.9319 29.9161 17.1436 29.9161C17.3553 29.9161 17.5622 29.8536 17.7383 29.7364L20.3581 27.9928L22.978 29.7343C23.1541 29.8514 23.361 29.914 23.5727 29.914C23.7844 29.914 23.9913 29.8514 24.1674 29.7343L26.7872 27.9928L29.4071 29.7343C29.5832 29.8514 29.7901 29.914 30.0018 29.914C30.2135 29.914 30.4204 29.8514 30.5965 29.7343L33.2164 27.9928L35.8362 29.7343C36.0123 29.8514 36.2192 29.914 36.4309 29.914C36.6426 29.914 36.8495 29.8514 37.0256 29.7343L39.6455 27.9928L41.7885 29.417V61.9687H18.2151V64.1055H48.2176C49.638 64.1038 50.9997 63.5405 52.0041 62.539C53.0085 61.5375 53.5735 60.1797 53.5752 58.7634V26.7107C53.5723 26.4757 53.4913 26.2483 53.3448 26.0643L59.5371 9.62654C59.9477 8.53872 60.0878 7.36794 59.9456 6.21433C59.8035 5.06071 59.3831 3.95862 58.7206 3.0023C58.0917 2.07493 57.2436 1.31604 56.2512 0.792482C55.2588 0.268926 54.1525 -0.00321764 53.0298 2.87063e-05C51.6104 0.0132245 50.2284 0.455443 49.0664 1.26827C47.9044 2.0811 47.017 3.2263 46.5214 4.55259L44.8412 9.01219L42.86 7.03668V3.2053C42.86 2.92194 42.7471 2.65018 42.5462 2.44981C42.3452 2.24944 42.0727 2.13688 41.7885 2.13688H30.0018C29.7176 2.13688 29.4451 2.24944 29.2441 2.44981C29.0432 2.65018 28.9303 2.92194 28.9303 3.2053V5.03872C28.3437 4.50857 27.5877 4.20293 26.7965 4.17613C26.0052 4.14933 25.2301 4.4031 24.6089 4.89235V3.2053C24.6089 2.36541 24.2742 1.55992 23.6786 0.96603C23.083 0.372137 22.2752 0.038492 21.4329 0.038492C20.5906 0.038492 19.7827 0.372137 19.1871 0.96603C18.5915 1.55992 18.2569 2.36541 18.2569 3.2053V4.89342C17.6706 4.40856 16.9324 4.14393 16.1706 4.14552C15.7328 4.14447 15.2993 4.23124 14.8958 4.40065C14.4923 4.57006 14.1271 4.81867 13.8219 5.13167C13.2103 5.76003 12.8667 6.60026 12.8633 7.47588C12.8599 8.35149 13.197 9.19435 13.8037 9.8274L14.8012 10.8542C14.4381 11.0201 14.1084 11.2507 13.8283 11.5347L13.8219 11.539L13.8112 11.5497C13.5616 11.8054 13.3553 12.0999 13.2004 12.4215L11.9789 10.1725L10.0941 11.1896L12.865 16.2892C12.7407 16.3598 12.6164 16.4281 12.4986 16.5083C12.4546 16.5382 12.4161 16.5724 12.3732 16.6023L8.22642 12.7923L6.77344 14.3639L10.8924 18.1504C10.4194 18.8718 10.1127 19.6889 9.99442 20.5426ZM32.6217 25.8217L30.0018 27.5654L27.3819 25.8239C27.2059 25.7067 26.9989 25.6442 26.7872 25.6442C26.5756 25.6442 26.3686 25.7067 26.1926 25.8239L23.5973 27.5494C23.5909 27.4425 23.5727 27.3496 23.5727 27.247C23.5694 26.11 23.9714 25.0088 24.7069 24.14C25.4425 23.2711 26.4637 22.6912 27.5884 22.5036C28.7131 22.3161 29.868 22.5331 30.8471 23.116C31.8261 23.699 32.5656 24.6098 32.9335 25.686C32.823 25.7146 32.7178 25.7604 32.6217 25.8217ZM35.3594 26.8517L35.339 26.8378C35.2755 25.731 34.9468 24.6556 34.3805 23.7016C33.8141 22.7476 33.0267 21.9429 32.0842 21.3549C31.1417 20.7669 30.0715 20.4128 28.9635 20.3222C27.8554 20.2316 26.7417 20.4072 25.7157 20.8343V13.8896H35.3594V26.8517ZM51.4322 58.7634C51.4322 59.6135 51.0935 60.4288 50.4906 61.0299C49.8878 61.631 49.0702 61.9687 48.2176 61.9687H43.9315V29.4191L46.0746 27.9928L48.6944 29.7343C48.8705 29.8514 49.0774 29.914 49.2891 29.914C49.5008 29.914 49.7077 29.8514 49.8838 29.7343L51.4322 28.7075V58.7634ZM48.5273 5.30369C48.8685 4.38374 49.4816 3.58859 50.2854 3.02321C51.0893 2.45783 52.0462 2.14879 53.0298 2.13688C53.8053 2.13543 54.5693 2.32411 55.2544 2.6863C55.9396 3.04849 56.525 3.57308 56.959 4.2139C57.4251 4.88697 57.7206 5.66264 57.8202 6.47448C57.9199 7.28633 57.8207 8.11016 57.5312 8.87544L50.8964 26.497L49.2891 27.5654L46.6693 25.8239C46.4932 25.7067 46.2862 25.6442 46.0746 25.6442C45.8629 25.6442 45.656 25.7067 45.4799 25.8239L42.86 27.5654L40.6859 26.1198L48.5273 5.30369ZM44.014 11.2089L38.3275 26.3025L37.5024 26.8517V13.2635L41.7885 8.98976L44.014 11.2089ZM31.0733 4.27373H40.717V6.41058H31.0733V4.27373ZM30.4454 8.54743H39.2019L35.9873 11.7527H27.2309L30.4454 8.54743ZM15.3509 6.63067C15.4573 6.52115 15.5847 6.43407 15.7255 6.3746C15.8664 6.31514 16.0177 6.2845 16.1706 6.2845C16.3236 6.28462 16.4749 6.31531 16.6157 6.37477C16.7565 6.43423 16.8839 6.52125 16.9904 6.63067L18.5633 8.23331C18.7127 8.38521 18.9042 8.48919 19.1132 8.53193C19.3222 8.57466 19.5392 8.5542 19.7365 8.47318C19.9338 8.39215 20.1023 8.25425 20.2205 8.07713C20.3387 7.90001 20.4012 7.69174 20.3999 7.479V3.2053C20.3936 3.0661 20.4156 2.92706 20.4646 2.79657C20.5137 2.66608 20.5887 2.54686 20.6853 2.44611C20.7818 2.34536 20.8978 2.26517 21.0263 2.21038C21.1548 2.1556 21.2931 2.12735 21.4329 2.12735C21.5726 2.12735 21.7109 2.1556 21.8394 2.21038C21.9679 2.26517 22.0839 2.34536 22.1805 2.44611C22.277 2.54686 22.3521 2.66608 22.4011 2.79657C22.4502 2.92706 22.4722 3.0661 22.4658 3.2053V7.479C22.4661 7.69097 22.5295 7.89808 22.6482 8.07398C22.7668 8.24987 22.9352 8.38661 23.132 8.46679C23.3288 8.54698 23.5451 8.56698 23.7533 8.52426C23.9615 8.48155 24.1523 8.37804 24.3013 8.2269L25.8797 6.62426C26.0968 6.41103 26.3893 6.2915 26.694 6.2915C26.9988 6.2915 27.2913 6.41103 27.5084 6.62426C27.7322 6.8528 27.8575 7.15957 27.8575 7.479C27.8575 7.79844 27.7322 8.10521 27.5084 8.33374L24.3517 11.539L24.3838 11.5711L23.8866 12.0668C23.8004 12.1555 23.7304 12.2586 23.6798 12.3713C23.6648 12.4044 23.6563 12.4376 23.6445 12.4718C23.6124 12.5627 23.593 12.6576 23.5866 12.7538C23.5866 12.7773 23.5738 12.7966 23.5738 12.8201V22.2446C23.3299 22.477 23.1035 22.727 22.8966 22.9925L20.8725 18.6975C20.5032 17.9647 19.9815 17.3189 19.3422 16.8031C18.7029 16.2872 17.9607 15.9132 17.165 15.7059C16.7901 15.6093 16.4063 15.5513 16.0196 15.5328L15.7453 15.2123C15.531 14.9676 15.3692 14.7763 15.3434 14.7496C15.2068 14.6072 15.1063 14.4343 15.0504 14.2453C14.9945 14.0562 14.9847 13.8566 15.022 13.663C15.0616 13.4401 15.1646 13.2331 15.3188 13.0669L15.3381 13.0487L15.3649 13.0199C15.5531 12.836 15.7991 12.7222 16.0615 12.6977C16.3239 12.6732 16.5868 12.7394 16.8061 12.8852C17.0256 13.0316 17.2915 13.0919 17.5529 13.0548C17.8143 13.0176 18.0527 12.8855 18.2224 12.6838C18.3921 12.4821 18.4812 12.2251 18.4725 11.962C18.4639 11.6988 18.3581 11.4482 18.1755 11.258L15.3434 8.34336C15.1222 8.11241 14.9993 7.80491 15.0007 7.48551C15.0021 7.16611 15.1276 6.85969 15.3509 6.63067ZM12.1182 20.8343C12.1872 20.3223 12.3637 19.8305 12.6363 19.391C12.9088 18.9516 13.2711 18.5744 13.6997 18.284C14.1247 17.9972 14.6059 17.804 15.1116 17.717C15.6172 17.6301 16.1356 17.6516 16.6323 17.7799C17.129 17.9083 17.5926 18.1406 17.9922 18.4615C18.3919 18.7824 18.7184 19.1844 18.9502 19.6409L21.6815 25.4414C21.6139 25.6914 21.5606 25.945 21.5218 26.201L20.9571 25.8249C20.781 25.7078 20.5741 25.6453 20.3624 25.6453C20.1507 25.6453 19.9438 25.7078 19.7677 25.8249L17.1436 27.5654L14.767 25.9841L14.5377 25.6967L17.3 23.5673L15.9885 21.8771L13.2025 24.0257L12.9647 23.7297C12.6276 23.3335 12.378 22.8708 12.2321 22.3719C12.0863 21.8731 12.0474 21.3491 12.1182 20.8343Z'
                    fill='#F2630C'
                  />
                  <path
                    d='M2.28769 61.4409C2.6868 62.2436 3.30353 62.9188 4.06792 63.3898C4.83232 63.8608 5.71378 64.1087 6.61234 64.1056C7.36276 64.1043 8.10276 63.9302 8.77466 63.597L9.64366 63.1632L10.5137 63.597C11.1852 63.9304 11.9249 64.1044 12.675 64.1056C13.5735 64.1087 14.455 63.8608 15.2194 63.3898C15.9838 62.9188 16.6005 62.2436 16.9996 61.4409L17.3736 60.693C18.6283 58.1828 19.2833 55.4172 19.2873 52.6125C19.2856 51.1274 18.6932 49.7035 17.64 48.6533C16.5868 47.6032 15.1588 47.0125 13.6694 47.0108C12.6237 47.0136 11.6 47.3098 10.7152 47.8655V47.0108C10.7152 45.8773 10.2636 44.7903 9.45982 43.9888C8.65602 43.1873 7.56584 42.7371 6.42911 42.7371V44.8739C6.99747 44.8739 7.54256 45.099 7.94446 45.4998C8.34636 45.9005 8.57214 46.444 8.57214 47.0108V47.8655C7.68736 47.3098 6.66362 47.0136 5.61797 47.0108C4.12851 47.0125 2.70055 47.6032 1.64734 48.6533C0.594139 49.7035 0.00170159 51.1274 0 52.6125C0.00368516 55.4179 0.658698 58.1843 1.91373 60.6951L2.28769 61.4409ZM5.61797 49.1476C6.07448 49.1464 6.5267 49.2354 6.94845 49.4097C7.3702 49.5839 7.75309 49.8398 8.07496 50.1626L8.8861 50.9714C9.08704 51.1717 9.35953 51.2842 9.64366 51.2842C9.92779 51.2842 10.2003 51.1717 10.4012 50.9714L11.2124 50.1626C11.6983 49.6781 12.3175 49.3482 12.9915 49.2145C13.6655 49.0808 14.3642 49.1494 14.9991 49.4117C15.634 49.6739 16.1767 50.1179 16.5585 50.6877C16.9404 51.2574 17.1442 51.9273 17.1443 52.6125C17.1415 55.0864 16.5638 57.526 15.4566 59.74L15.0827 60.4879C14.8599 60.9341 14.5164 61.3093 14.0909 61.571C13.6654 61.8327 13.1749 61.9705 12.675 61.9687C12.2574 61.968 11.8455 61.8711 11.4717 61.6856L10.1226 61.0125C9.9739 60.9384 9.80992 60.8998 9.64366 60.8998C9.4774 60.8998 9.31342 60.9384 9.16469 61.0125L7.81672 61.6856C7.44243 61.871 7.03029 61.9679 6.61234 61.9687C6.11207 61.9702 5.62138 61.832 5.19585 61.5697C4.77032 61.3074 4.42695 60.9315 4.20464 60.4847L3.83068 59.7368C2.72398 57.5238 2.14634 55.0853 2.14304 52.6125C2.14417 51.6939 2.51064 50.8133 3.16207 50.1637C3.8135 49.5142 4.69671 49.1487 5.61797 49.1476Z'
                    fill='#F2630C'
                  />
                </svg>
              </div>
              <div className='promo-partner__title'>Для бизнеса</div>
              <div className='promo-partner__description'>
                Организуем доставку по городу день-в-день документов или заказов для ваших клиентов.
                Работаем без предоплаты.
              </div>
              <a href='https://b2b.broniboy.ru/' title='Подробнее' className='promo-partner__link'>
                Подробнее
                <svg
                  width={44}
                  height={10}
                  viewBox='0 0 44 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M43.4596 5.49136C43.7135 5.23752 43.7135 4.82596 43.4596 4.57212L39.323 0.435544C39.0692 0.181704 38.6576 0.181704 38.4038 0.435544C38.15 0.689385 38.15 1.10094 38.4038 1.35478L42.0808 5.03174L38.4038 8.70869C38.15 8.96253 38.15 9.37409 38.4038 9.62793C38.6576 9.88177 39.0692 9.88177 39.323 9.62793L43.4596 5.49136ZM0 5.68174H43V4.38174H0V5.68174Z'
                    fill='#F2630C'
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section className='container custom-page' />
      </main>
    </div>
    <footer className='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='footer__header'>
            <div className='col-sm'>
              <a href='https://broniboy.ru' title='Главная' className='logo'>
                <svg
                  width={150}
                  height={50}
                  viewBox='0 0 150 50'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0)'>
                    <path
                      d='M40.0476 17.2041C39.9284 16.9652 39.8092 16.7262 39.6305 16.4275L37.1871 13.2017L37.1275 13.142C36.9487 12.9628 36.7699 12.7238 36.5315 12.5446C36.8891 12.0667 37.1871 11.5888 37.4254 11.1109C38.4386 9.3188 39.4517 6.98905 38.379 5.07746C38.2598 4.89825 38.1406 4.71904 38.0214 4.53982L35.876 1.67244C34.6841 -0.0599367 32.3003 -0.0599365 31.5256 -0.0599365C31.168 -0.0599365 30.8104 -0.0599365 30.4529 -0.000199359C25.0297 0.417961 19.1895 1.67244 13.8259 3.16587C12.7532 3.46456 11.8593 4.1814 11.3229 5.1372C7.92605 11.3499 2.62211 24.4323 0.476703 30.645C0.238324 31.4215 -0.476813 33.3929 0.655487 34.946L3.09887 38.1718C3.45644 38.6497 4.29077 39.5458 5.66145 39.4263C5.12509 40.7405 4.52915 42.5327 4.23117 43.6677C3.99279 44.5637 4.17158 45.3403 4.70793 46.3558C5.12509 47.1324 6.1382 48.5064 7.09172 49.4024C7.98564 50.2985 9.11794 50.1193 10.1906 49.5219C14.1239 47.4311 23.7783 41.2184 32.5983 31.541C37.2467 26.2842 41.3587 20.191 40.0476 17.2041Z'
                      fill='#010202'
                    />
                    <path
                      d='M2.62228 30.8839C4.82728 24.4323 10.012 11.9472 13.111 6.21248C13.3493 5.73458 13.8261 5.37616 14.3028 5.25668C20.4411 3.5243 26.2218 2.44904 30.5126 2.15035C34.8034 1.85166 32.956 6.093 31.7641 8.48249C30.453 10.9914 28.248 13.9186 28.248 13.9186C28.248 13.9186 30.0955 13.0822 32.4197 13.0822C37.664 13.0822 36.1145 18.2794 27.7117 27.8373C22.1098 34.2292 12.3958 41.3379 7.44945 44.0261C7.21107 44.1456 6.8535 44.1456 6.67472 44.0261C6.49593 43.9066 6.43634 43.6079 6.55553 43.2495C7.38986 40.3224 9.41608 36.0811 10.5484 32.9747C8.16459 33.2137 5.84039 33.6318 4.05255 33.7513C1.78795 33.9305 2.20511 32.1384 2.62228 30.8839Z'
                      fill='#F5F5F5'
                    />
                    <path
                      d='M15.1369 19.9519C14.1834 22.4609 13.4683 24.3725 12.8127 26.2841C18.8914 24.9101 21.3944 23.118 21.9307 21.0272C22.5267 18.8169 19.6065 18.5182 15.1369 19.9519Z'
                      fill='#010202'
                    />
                    <path
                      d='M19.4871 8.84073V8.9602C19.4871 8.9602 18.7124 10.8121 17.6396 13.5002C22.884 12.425 24.4335 10.9913 24.791 9.916C25.1486 8.90047 24.791 6.98888 19.4871 8.84073Z'
                      fill='#010202'
                    />
                    <path
                      d='M56.9129 23.1181C57.926 22.7597 58.6411 22.1623 59.1179 21.3857C59.5946 20.6091 59.833 19.6533 59.8926 18.5781C59.9522 17.2041 59.5946 16.1886 58.8199 15.4717C58.0452 14.7549 56.8533 14.3965 55.2442 14.3965H49.7615L45.5303 32.7955H51.0726C51.9665 32.7955 52.8604 32.676 53.6948 32.4371C54.5887 32.1981 55.3634 31.8397 56.0189 31.3618C56.7341 30.8839 57.2704 30.2268 57.7472 29.3905C58.224 28.5542 58.4623 27.5984 58.4623 26.4036C58.4623 25.7465 58.3431 25.0894 58.1048 24.492C57.8664 23.8947 57.3896 23.4765 56.7341 23.2376C56.7341 23.1778 56.7341 23.1778 56.7341 23.1778C56.9129 23.1778 56.9129 23.1181 56.9129 23.1181ZM54.5887 27.4192C54.4695 27.7776 54.2907 28.0763 54.1119 28.3152C53.8735 28.6139 53.6352 28.7931 53.2776 28.9723C52.92 29.1515 52.5625 29.2113 52.1453 29.2113H50.1787L51.1918 24.8505H53.2776C53.8139 24.8505 54.2311 24.9699 54.4695 25.2686C54.7079 25.5673 54.8866 25.9257 54.8271 26.4036C54.7675 26.762 54.7079 27.1205 54.5887 27.4192ZM56.0189 20.0715C55.8998 20.3702 55.721 20.6091 55.5422 20.8481C55.3038 21.087 55.0654 21.2662 54.7675 21.3857C54.4695 21.5052 54.1715 21.5649 53.8139 21.5649H51.8473L52.7412 17.8612H54.5887C55.1846 17.8612 55.6018 17.9807 55.8402 18.1599C56.0785 18.3988 56.1977 18.6975 56.1977 19.1754C56.1977 19.4741 56.1381 19.7728 56.0189 20.0715ZM69.0702 14.3965H63.3491L59.1179 32.7955H62.8723L64.541 25.5076H66.1501L67.4015 32.7955H71.454L69.9045 24.8505C70.9772 24.4323 71.8712 23.7752 72.5863 22.8791C73.3014 21.9831 73.7186 20.7286 73.7782 19.2352C73.8974 17.5625 73.5398 16.3678 72.6459 15.5912C71.8116 14.7549 70.6197 14.3965 69.0702 14.3965ZM69.9045 20.7286C69.7257 21.0273 69.547 21.2662 69.3086 21.4454C69.0702 21.6246 68.7722 21.7441 68.4147 21.8636C68.0571 21.9233 67.7591 21.9831 67.4015 21.9831H65.3753L66.3288 17.8015H68.3551C68.951 17.8015 69.3682 17.9209 69.7257 18.2196C70.0833 18.4586 70.2025 18.9365 70.1429 19.5936C70.1429 20.0715 70.0237 20.4299 69.9045 20.7286ZM86.9486 18.2794C86.8294 17.5028 86.5315 16.8457 86.1739 16.2483C85.7567 15.6509 85.2204 15.173 84.5052 14.8146C83.7901 14.4562 82.9558 14.277 81.9427 14.277C80.87 14.277 79.976 14.4562 79.2013 14.8146C78.4266 15.173 77.771 15.6509 77.2347 16.1886C76.6983 16.7262 76.2812 17.3833 75.9832 18.1002C75.6852 18.817 75.4468 19.4741 75.2681 20.191L73.7782 26.2841C73.5994 27.1802 73.5398 28.0165 73.5994 28.7931C73.659 29.5697 73.957 30.2865 74.3741 30.9436C74.7913 31.541 75.3872 32.0786 76.162 32.4371C76.9367 32.7955 77.8902 32.9747 79.1417 32.9747C80.0356 32.9747 80.87 32.8552 81.5851 32.5565C82.3002 32.2579 82.8962 31.8994 83.4325 31.3618C83.9689 30.8242 84.3861 30.2268 84.684 29.51C85.0416 28.7931 85.28 27.9568 85.5183 27.0607L87.0082 20.6689C87.0678 19.8325 87.1274 18.9962 86.9486 18.2794ZM83.1346 20.1312L81.5255 27.2399C81.4063 27.8373 81.1083 28.3152 80.7508 28.6736C80.3932 29.0321 79.9164 29.2113 79.3801 29.2113C78.6054 29.2113 78.069 28.9723 77.771 28.5542C77.4731 28.136 77.4135 27.4789 77.5922 26.6426L79.1417 19.952C79.2013 19.7131 79.2609 19.5338 79.3801 19.2949C79.4993 19.056 79.6185 18.817 79.7972 18.6378C79.976 18.4586 80.2144 18.2794 80.4528 18.1599C80.6912 18.0404 81.0487 17.9807 81.4063 17.9807C81.7639 17.9807 82.1214 18.0404 82.3598 18.2196C82.5982 18.3988 82.777 18.5781 82.9558 18.817C83.075 19.056 83.1942 19.2949 83.1942 19.5338C83.1942 19.7131 83.1942 19.952 83.1346 20.1312ZM99.2847 14.3965L96.901 25.2686H96.7818C96.7818 25.0894 96.7222 24.7907 96.603 24.3128C96.4838 23.8349 96.305 23.2973 96.1858 22.7597C96.007 22.222 95.8878 21.6844 95.7091 21.2065C95.5899 20.7286 95.4707 20.4299 95.4707 20.2507L93.8616 14.3965H90.5243L86.2931 32.7955H90.0476L92.3717 22.461H92.4313L93.504 26.4036L95.4707 32.7955H98.7484L102.98 14.3965H99.2847ZM105.661 14.3965L101.43 32.7955H105.185L109.416 14.3965H105.661ZM117.64 14.3965H112.157L107.926 32.7955H113.468C114.362 32.7955 115.256 32.676 116.09 32.4371C116.984 32.1981 117.759 31.8397 118.415 31.3618C119.13 30.8839 119.666 30.2268 120.143 29.3905C120.62 28.5542 120.858 27.5984 120.858 26.4036C120.858 25.7465 120.739 25.0894 120.5 24.492C120.262 23.8947 119.785 23.4765 119.13 23.2376C119.13 23.1778 119.13 23.1778 119.13 23.1778V23.1181C120.143 22.7597 120.858 22.1623 121.335 21.3857C121.812 20.6091 122.05 19.6533 122.11 18.5781C122.169 17.2041 121.812 16.1886 121.037 15.4717C120.381 14.6951 119.189 14.3965 117.64 14.3965ZM116.925 27.4192C116.806 27.7776 116.627 28.0763 116.448 28.3152C116.21 28.6139 115.971 28.7931 115.614 28.9723C115.256 29.1515 114.899 29.2113 114.481 29.2113H112.515L113.528 24.8505H115.614C116.15 24.8505 116.567 24.9699 116.806 25.2686C117.044 25.5673 117.223 25.9257 117.163 26.4036C117.104 26.762 117.044 27.1205 116.925 27.4192ZM118.355 20.0715C118.236 20.3702 118.057 20.6091 117.878 20.8481C117.64 21.087 117.402 21.2662 117.104 21.3857C116.806 21.5052 116.508 21.5649 116.15 21.5649H114.183L115.077 17.8612H116.925C117.521 17.8612 117.938 17.9807 118.176 18.1599C118.415 18.3988 118.534 18.6975 118.534 19.1754C118.534 19.4741 118.474 19.7728 118.355 20.0715ZM134.863 16.2483C134.446 15.6509 133.909 15.173 133.194 14.8146C132.479 14.4562 131.645 14.277 130.632 14.277C129.559 14.277 128.665 14.4562 127.89 14.8146C127.115 15.173 126.46 15.6509 125.924 16.1886C125.387 16.7262 124.97 17.3833 124.672 18.1002C124.374 18.817 124.136 19.4741 123.957 20.191L122.467 26.2841C122.229 27.1802 122.169 28.0165 122.288 28.7931C122.348 29.5697 122.646 30.2865 123.063 30.9436C123.48 31.541 124.076 32.0786 124.851 32.4371C125.626 32.7955 126.579 32.9747 127.831 32.9747C128.725 32.9747 129.559 32.8552 130.274 32.5565C130.989 32.2579 131.585 31.8994 132.121 31.3618C132.658 30.8242 133.075 30.2268 133.433 29.51C133.79 28.7931 134.028 27.9568 134.267 27.0607L135.757 20.6689C135.936 19.8325 135.995 19.056 135.876 18.3391C135.578 17.5028 135.28 16.8457 134.863 16.2483ZM131.823 20.1312L130.214 27.2399C130.095 27.8373 129.797 28.3152 129.44 28.6736C129.082 29.0321 128.605 29.2113 128.069 29.2113C127.294 29.2113 126.758 28.9723 126.46 28.5542C126.162 28.136 126.102 27.4789 126.281 26.6426L127.831 19.952C127.89 19.7131 127.95 19.5338 128.069 19.2949C128.188 19.056 128.307 18.817 128.486 18.6378C128.665 18.4586 128.903 18.2794 129.142 18.1599C129.44 18.0404 129.738 17.9807 130.155 17.9807C130.512 17.9807 130.87 18.0404 131.108 18.2196C131.347 18.3988 131.526 18.5781 131.704 18.817C131.823 19.056 131.943 19.2949 131.943 19.5338C131.883 19.7131 131.883 19.952 131.823 20.1312ZM145.888 14.3965L143.802 18.1002C143.504 18.6975 143.146 19.2949 142.848 19.952C142.551 20.6091 142.193 21.2065 141.895 21.8039H141.716C141.716 21.5649 141.657 21.2065 141.657 20.9078C141.657 20.5494 141.597 20.191 141.597 19.8923C141.597 19.5338 141.537 19.1754 141.537 18.817C141.478 18.4586 141.478 18.1599 141.418 17.8612C141.359 17.2638 141.239 16.6665 141.18 16.1288C141.12 15.5912 141.001 15.0536 140.941 14.3965H136.949L139.094 25.4478C138.796 26.7023 138.498 27.897 138.26 29.1515C137.962 30.406 137.723 31.6008 137.425 32.8552H141.12L142.789 25.4478L150 14.3965H145.888Z'
                      fill='#010202'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0'>
                      <rect width={150} height={50} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <div className='logo__description'>Принимаем заказы с 09:00 до 23:30</div>
              </a>
              <ul className='social-links'>
                <li data-actor-socialnetwork='Facebook'>
                  <a
                    href='https://www.facebook.com/broniboy.world/'
                    rel='nofollow'
                    title='Facebook'
                  >
                    <svg
                      width={30}
                      height={30}
                      viewBox='0 0 30 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M30 15C30 6.71484 23.2852 0 15 0C6.71484 0 0 6.71484 0 15C0 22.4883 5.48438 28.6934 12.6562 29.8184V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93652 14.8945 5.85937 18.3223 5.85937C19.9629 5.85937 21.6797 6.15234 21.6797 6.15234V9.84375H19.7871C17.9238 9.84375 17.3438 11.001 17.3438 12.1875V15H21.5039L20.8389 19.3359H17.3438V29.8184C24.5156 28.6934 30 22.4883 30 15Z'
                        fill='black'
                      />
                    </svg>
                  </a>
                </li>
                <li data-actor-socialnetwork='Вконтакте'>
                  <a href='https://vk.com/broniboy' rel='nofollow' title='Вконтакте'>
                    <svg
                      width={30}
                      height={30}
                      viewBox='0 0 30 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM15.7977 19.7741C15.6405 19.9307 15.3337 19.9624 15.3337 19.9624H14.3176C14.3176 19.9624 12.076 20.0874 10.1013 18.18C7.94775 16.099 6.04618 11.9703 6.04618 11.9703C6.04618 11.9703 5.93642 11.6994 6.05532 11.569C6.18919 11.4217 6.55421 11.4124 6.55421 11.4124L8.98293 11.3978C8.98293 11.3978 9.21159 11.4325 9.37539 11.5444C9.51092 11.6369 9.58658 11.809 9.58658 11.809C9.58658 11.809 9.97903 12.7303 10.4987 13.5636C11.5139 15.1909 11.9862 15.5466 12.3304 15.3722C12.8326 15.1184 12.6821 13.0721 12.6821 13.0721C12.6821 13.0721 12.6913 12.3298 12.4294 11.9988C12.2265 11.7427 11.844 11.6678 11.6752 11.647C11.538 11.63 11.7625 11.3353 12.0536 11.2033C12.4909 11.005 13.2625 10.9934 14.1746 11.0019C14.8855 11.0089 15.0901 11.0498 15.3678 11.1123C16.0123 11.2566 15.9922 11.7192 15.9488 12.7174C15.9358 13.016 15.9207 13.3625 15.9207 13.7627C15.9207 13.8526 15.9179 13.9485 15.915 14.0471C15.8999 14.5585 15.8827 15.1442 16.2458 15.3622C16.4321 15.4733 16.8869 15.3784 18.0252 13.5852C18.5648 12.7349 18.9689 11.7357 18.9689 11.7357C18.9689 11.7357 19.0579 11.5575 19.1951 11.4811C19.3356 11.4032 19.5251 11.4271 19.5251 11.4271L22.0811 11.4124C22.0811 11.4124 22.8494 11.3268 22.9733 11.6493C23.1038 11.9865 22.6864 12.775 21.6421 14.0667C20.6543 15.2887 20.1722 15.7408 20.2132 16.1391C20.2434 16.432 20.5569 16.6958 21.1607 17.2155C22.416 18.2971 22.7525 18.8661 22.8333 19.0028C22.84 19.0142 22.845 19.0226 22.8485 19.028C23.4114 19.8945 22.2241 19.9624 22.2241 19.9624L19.9534 19.9917C19.9534 19.9917 19.4661 20.0812 18.8242 19.6723C18.488 19.4582 18.1594 19.1087 17.8464 18.7757C17.3685 18.2672 16.927 17.7974 16.5501 17.9084C15.9174 18.0951 15.9365 19.3598 15.9365 19.3598C15.9365 19.3598 15.9415 19.6306 15.7977 19.7741Z'
                        fill='black'
                      />
                    </svg>
                  </a>
                </li>
                <li data-actor-socialnetwork='Одноклассники'>
                  <a href='https://ok.ru/group/54843064713450' rel='nofollow' title='Одноклассники'>
                    <svg
                      width={30}
                      height={30}
                      viewBox='0 0 30 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM14.9898 15.2408C17.2017 15.2408 18.9997 13.505 18.9997 11.371C18.9997 9.23632 17.2017 7.5 14.9898 7.5C12.7784 7.5 10.9798 9.23632 10.9798 11.371C10.9798 13.505 12.7784 15.2408 14.9898 15.2408ZM18.951 17.4693C18.226 17.9089 17.4388 18.2206 16.6225 18.4001L18.8642 20.5642C19.3234 21.0066 19.3234 21.725 18.8642 22.1678C18.4054 22.6107 17.6619 22.6107 17.2036 22.1678L14.9996 20.0413L12.7975 22.1678C12.5679 22.389 12.2671 22.4997 11.9662 22.4997C11.6658 22.4997 11.3654 22.389 11.1358 22.1678C10.677 21.725 10.677 21.007 11.1353 20.5642L13.3772 18.4001C12.561 18.2206 11.7738 17.9084 11.0487 17.4693C10.5 17.1354 10.3351 16.4357 10.6809 15.9056C11.0257 15.3747 11.7507 15.2149 12.3004 15.5489C13.942 16.5457 16.0568 16.5459 17.6993 15.5489C18.249 15.2149 18.9738 15.3747 19.3193 15.9056C19.6651 16.4352 19.4998 17.1354 18.951 17.4693Z'
                        fill='black'
                      />
                      <path
                        d='M14.9897 9.76868C15.9052 9.76868 16.65 10.4873 16.65 11.3711C16.65 12.2542 15.9052 12.9733 14.9897 12.9733C14.0748 12.9733 13.3293 12.2542 13.3293 11.3711C13.3293 10.4873 14.0748 9.76868 14.9897 9.76868Z'
                        fill='black'
                      />
                    </svg>
                  </a>
                </li>
                <li data-actor-socialnetwork='Instagram'>
                  <a href='https://instagram.com/broniboy/' rel='nofollow' title='Instagram'>
                    <svg
                      width={30}
                      height={30}
                      viewBox='0 0 30 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM11.702 7.04848C12.5554 7.00965 12.828 7.00015 15.0007 7.00015H14.9982C17.1716 7.00015 17.4432 7.00965 18.2966 7.04848C19.1483 7.08748 19.7299 7.22232 20.2399 7.42015C20.7666 7.62432 21.2116 7.89766 21.6566 8.34266C22.1016 8.78734 22.375 9.23367 22.58 9.75984C22.7766 10.2685 22.9116 10.8499 22.9516 11.7015C22.99 12.5549 23 12.8275 23 15.0002C23 17.1729 22.99 17.4449 22.9516 18.2983C22.9116 19.1496 22.7766 19.7311 22.58 20.24C22.375 20.766 22.1016 21.2123 21.6566 21.657C21.2121 22.102 20.7664 22.376 20.2404 22.5803C19.7314 22.7781 19.1494 22.913 18.2977 22.952C17.4444 22.9908 17.1726 23.0003 14.9997 23.0003C12.8272 23.0003 12.5547 22.9908 11.7013 22.952C10.8498 22.913 10.2683 22.7781 9.75932 22.5803C9.23348 22.376 8.78715 22.102 8.34264 21.657C7.8978 21.2123 7.62447 20.766 7.41996 20.2398C7.2223 19.7311 7.08746 19.1498 7.04829 18.2981C7.00963 17.4448 6.99996 17.1729 6.99996 15.0002C6.99996 12.8275 7.00996 12.5547 7.04813 11.7014C7.08646 10.85 7.22146 10.2685 7.4198 9.75968C7.6248 9.23367 7.89814 8.78734 8.34314 8.34266C8.78781 7.89783 9.23415 7.62449 9.76032 7.42015C10.269 7.22232 10.8503 7.08748 11.702 7.04848Z'
                        fill='black'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M14.2831 8.4417C14.4225 8.44148 14.5724 8.44155 14.7341 8.44162L15.0008 8.4417C17.1368 8.4417 17.39 8.44936 18.2335 8.4877C19.0135 8.52336 19.4368 8.6537 19.7188 8.7632C20.0922 8.9082 20.3583 9.08154 20.6382 9.36154C20.9182 9.64154 21.0915 9.90821 21.2369 10.2815C21.3464 10.5632 21.4769 10.9866 21.5124 11.7666C21.5507 12.6099 21.559 12.8632 21.559 14.9983C21.559 17.1333 21.5507 17.3866 21.5124 18.23C21.4767 19.01 21.3464 19.4333 21.2369 19.715C21.0918 20.0883 20.9182 20.3542 20.6382 20.634C20.3582 20.914 20.0923 21.0873 19.7188 21.2323C19.4372 21.3423 19.0135 21.4723 18.2335 21.508C17.3901 21.5463 17.1368 21.5547 15.0008 21.5547C12.8646 21.5547 12.6114 21.5463 11.7681 21.508C10.9881 21.472 10.5647 21.3417 10.2826 21.2322C9.90923 21.0872 9.64256 20.9138 9.36256 20.6338C9.08256 20.3538 8.90922 20.0878 8.76389 19.7143C8.65439 19.4326 8.52388 19.0093 8.48838 18.2293C8.45005 17.386 8.44238 17.1326 8.44238 14.9963C8.44238 12.8599 8.45005 12.6079 8.48838 11.7646C8.52405 10.9846 8.65439 10.5612 8.76389 10.2792C8.90889 9.90588 9.08256 9.63921 9.36256 9.35921C9.64256 9.0792 9.90923 8.90587 10.2826 8.76053C10.5646 8.65053 10.9881 8.52053 11.7681 8.4847C12.5061 8.45136 12.7921 8.44136 14.2831 8.4397V8.4417ZM19.2712 9.76991C18.7412 9.76991 18.3112 10.1994 18.3112 10.7296C18.3112 11.2596 18.7412 11.6896 19.2712 11.6896C19.8012 11.6896 20.2312 11.2596 20.2312 10.7296C20.2312 10.1996 19.8012 9.76957 19.2712 9.76957V9.76991ZM10.8924 15C10.8924 12.7312 12.7319 10.8917 15.0006 10.8917C17.2695 10.8917 19.1085 12.7312 19.1085 15C19.1085 17.2689 17.2697 19.1076 15.0008 19.1076C12.732 19.1076 10.8924 17.2689 10.8924 15Z'
                        fill='black'
                      />
                      <path
                        d='M15.0007 12.3331C16.4734 12.3331 17.6674 13.527 17.6674 14.9998C17.6674 16.4725 16.4734 17.6665 15.0007 17.6665C13.5278 17.6665 12.334 16.4725 12.334 14.9998C12.334 13.527 13.5278 12.3331 15.0007 12.3331Z'
                        fill='black'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-sm'>
              <div className='footer-bottom__title footer-bottom__title--contacts'>Контакты</div>
              <div className='footer-nav footer-nav--contacts'>
                <ul className='list-clear'>
                  <li data-actor='footer-number'>
                    <a href='tel:88005555708' title='8 800 555-57-08'>
                      8 800 555-57-08
                    </a>
                  </li>
                  <li data-actor='footer-email'>
                    <a href='mailto:support@broniboy.ru' title='support@broniboy.ru'>
                      support@broniboy .ru
                    </a>
                  </li>
                </ul>
              </div>
              <div className='footer-app'>
                <a
                  href='https://app.adjust.com/e0ifxiw?deep_link=broniboy%3A%2F%2Fapp&is_organic=1&fallback=https://play.google.com/store/apps/details?id=com.broniboy.client&redirect_macos=https://play.google.com/store/apps/details?id=com.broniboy.client'
                  className='app-btn app-btn_google-play'
                  title='Broniboy'
                  data-analytic='InstallApplication_Google_GoTo'
                  data-os='Android'
                />
                <a
                  href='https://app.adjust.com/e0ifxiw?deep_link=broniboy%3A%2F%2Fapp&is_organic=1&fallback=https://itunes.apple.com/app/id1262921130&redirect_macos=https://itunes.apple.com/app/id1262921130'
                  className='app-btn app-btn_app-store'
                  title='Broniboy'
                  data-analytic='InstallApplication_Apple_GoTo'
                  data-os='IOS'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container' style={{ display: 'block' }}>
          <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
              <div className='footer-bottom__title'>Категории</div>
              <div className='footer-nav'>
                <ul className='list-clear'>
                  <li>
                    <a href='https://broniboy.ru/nn/flowers/' title='Цветы'>
                      Цветы
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/pharmacy/' title='Аптеки'>
                      Аптеки
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/grocery/' title='Продукты'>
                      Продукты
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/office-equipment/' title='Орг. техника'>
                      Орг. техника
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/' title='Рестораны и кафе'>
                      Рестораны и кафе
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/other/' title='Другое'>
                      Другое
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/cosmetics/' title='Косметика'>
                      Косметика
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/sbermarket/' title='Сбермаркет'>
                      Сбермаркет
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-12'>
              <div className='footer-bottom__title'>Еда</div>
              <div className='footer-nav'>
                <ul className='list-clear'>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/sushi/' title='Суши и роллы'>
                      Суши и роллы
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/pizza/' title='Пицца'>
                      Пицца
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/burgers/' title='Бургеры'>
                      Бургеры
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/shashlyk/' title='Шашлык'>
                      Шашлык
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/shaurma/' title='Шаурма'>
                      Шаурма
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/cakes/' title='Торты'>
                      Торты
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/pirogi/' title='Пироги'>
                      Пироги
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
              <div className='footer-bottom__title'>Популярные места</div>
              <div className='footer-nav'>
                <ul className='list-clear'>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/p_franky-bar/' title='Franky bar'>
                      Franky bar
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/p_noot/' title='Noot'>
                      Noot
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/p_lee-s-food/' title="Lee's Food">
                      Lee's Food
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/p_madzhong/' title='Маджонг'>
                      Маджонг
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/p_italica/' title='ITALICA'>
                      ITALICA
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/nn/restaurants/p_bhajan/' title='Bhajan'>
                      Bhajan
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
              <div className='footer-bottom__title'>О компании</div>
              <div className='footer-nav'>
                <ul className='list-clear'>
                  <li>
                    <a
                      href='https://broniboy.ru/user-agreement/'
                      title='Пользовательское соглашение'
                      rel='nofollow'
                    >
                      Пользовательское соглашение
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://broniboy.ru/personal-data-agreement/'
                      title='Согласие на обработку персональных данных'
                      rel='nofollow'
                    >
                      Согласие на обработку персональных данных
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://broniboy.ru/rules/'
                      title='Правила оказания услуг продавцом'
                      rel='nofollow'
                    >
                      Правила оказания услуг продавцом
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://broniboy.ru/rules-delivery/'
                      title='Правила оказания услуг по доставке'
                      rel='nofollow'
                    >
                      Правила оказания услуг по доставке
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://broniboy.ru/privacy-policy/'
                      title='Политика конфиденциальности'
                      rel='nofollow'
                    >
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/contacts/' title='Контакты' rel='nofollow'>
                      Контакты
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://jobs.broniboy.ru/'
                      title='Хочу работать в BRONIBOY'
                      rel='nofollow'
                    >
                      Хочу работать в BRONIBOY
                    </a>
                  </li>
                  <li>
                    <a href='https://broniboy.ru/sitemap/' title='Карта сайта'>
                      Карта сайта
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
              <div className='footer-bottom__title'>Города</div>
              <div className='footer-nav'>
                <ul className='list-clear'>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/samara/' title='Самара'>
                      Самара
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/novorossijsk/' title='Новороссийск'>
                      Новороссийск
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/moscow/' title='Москва'>
                      Москва
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/tyumen/' title='Тюмень'>
                      Тюмень
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/voronezh/' title='Воронеж'>
                      Воронеж
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/anapa/' title='Анапа'>
                      Анапа
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/krasnodar/' title='Краснодар'>
                      Краснодар
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/nn/' title='Нижний Новгород'>
                      Нижний Новгород
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/gelendzhik/' title='Геленджик'>
                      Геленджик
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/kazan/' title='Казань'>
                      Казань
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/ekaterinburg/' title='Екатеринбург'>
                      Екатеринбург
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/tashkent/' title='Ташкент'>
                      Ташкент
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/rostov-na-donu/' title='Ростов-на-Дону'>
                      Ростов-на-Дону
                    </a>
                  </li>
                  <li style={{ display: 'inline', paddingRight: '20px' }}>
                    <a href='https://broniboy.ru/ufa/' title='Уфа'>
                      Уфа
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
              <a href='https://sk.ru' rel='nofollow'>
                <img src='/images/sk_resident2ru.jpg' alt='' />
              </a>
            </div>
          </div>
        </div>{' '}
        <div className='footer-copyright'>
          <p>© 2022 Broniboy. ООО «УК Бронибой»</p>
        </div>
      </div>
    </footer>
  </>
);

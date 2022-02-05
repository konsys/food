import React, { FC } from 'react';
import './footer.less';

import { FooterSocials } from './components/FooterSocials/FooterSocials';
import FooterContacts from './components/FooterContacts/FooterContacts';

export const Footer: FC = () => (
  <footer className='footer'>
    <div className='footer-top'>
      <div className='container'>
        <div className='footer__header'>
          <FooterSocials />
          <FooterContacts />
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
                    Lees Food
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
);

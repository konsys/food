import React, { memo } from 'react';
import { FooterSocials } from './components/FooterSocials/FooterSocials';
import FooterContacts from './components/FooterContacts/FooterContacts';
import FooterMenu from './components/FooterMenu/FooterMenu';
import FooterCities from './components/FooterCities/FooterCities';
import FooterCopyright from './components/FooterCopyright/FooterCopyright';
import './footer.less';

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='footer__header d-flex'>
            <FooterSocials />
            <FooterContacts />
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div className='row d-flex footer__cities'>
            <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
              <FooterMenu
                title='Категории'
                links={[
                  {
                    link: '/',
                    text: 'Цветы',
                  },
                  {
                    link: '/',
                    text: 'Аптеки',
                  },
                  {
                    link: '/',
                    text: 'Продукты',
                  },
                  {
                    link: '/',
                    text: 'Техника',
                  },
                  {
                    link: '/',
                    text: 'Рестораны',
                  },
                ]}
              />
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-12'>
              <FooterMenu
                title='Еда'
                links={[
                  {
                    link: '/',
                    text: 'Суши и роллы',
                  },
                  {
                    link: '/',
                    text: 'Пицца',
                  },
                  {
                    link: '/',
                    text: 'Бургеры',
                  },
                  {
                    link: '/',
                    text: 'Шашлык',
                  },
                  {
                    link: '/',
                    text: 'Шаурма',
                  },
                ]}
              />
            </div>
            <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
              <FooterMenu
                title='Популярные места'
                links={[
                  {
                    link: '/',
                    text: 'Franky bar',
                  },
                  {
                    link: '/',
                    text: 'Noot',
                  },
                  {
                    link: '/',
                    text: "Lee's Food",
                  },
                  {
                    link: '/',
                    text: 'Маджонг',
                  },
                  {
                    link: '/',
                    text: 'ITALICA',
                  },
                ]}
              />
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
              <FooterMenu
                title='О компании'
                links={[
                  {
                    link: '/',
                    text: 'Пользовательское соглашение',
                  },
                  {
                    link: '/',
                    text: 'Согласие на обработку персональных данных',
                  },
                  {
                    link: '/',
                    text: 'Правила оказания услуг продавцом',
                  },
                  {
                    link: '/',
                    text: 'Правила оказания услуг по доставке',
                  },
                  {
                    link: '/',
                    text: 'Политика конфиденциальности',
                  },
                ]}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
              <FooterCities
                title='Города'
                links={[
                  {
                    text: 'Нижний Новгород',
                    link: '/',
                  },
                  {
                    text: 'Москва',
                    link: '/',
                  },
                  {
                    text: 'Санкт-Петербург',
                    link: '/',
                  },
                  {
                    text: 'Самара',
                    link: '/',
                  },
                ]}
              />
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
              <a href='https://sk.ru' rel='nofollow'>
                <img src='https://broniboy.ru/images/sk_resident2ru.jpg' alt='' />
              </a>
            </div>
          </div>
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}

export default memo(Footer);

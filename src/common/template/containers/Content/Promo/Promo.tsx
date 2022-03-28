import React, { memo } from 'react';
import './promo.less';

interface Props {}

function Promo(props: Props) {
  const {} = props;

  return (
    <section className='promo-block'>
      <div className='container d-flex'>
        <div className='promo-block__info d-flex justify-content-center align-items-center'>
          <picture>
            <source srcSet='https://bro.ru, /img/content/mobile-app@2x.webp 2x' type='image/webp' />
            <img
              src='img/content/mobile-app.png'
              alt='Приложение Broniboy'
              className='img-responsive'
            />
          </picture>
        </div>
        <div className='promo-block__info d-flex justify-content-center align-items-center'>
          <div className='promo-item'>
            <div className='promo-item__description'>
              <div className='promo-item__title'>С приложением еще лучше</div>
              <ul className='promo-item__list'>
                <li>Отслеживайте курьера на карте</li>
                <li>Повторяйте прошлый заказ в один клик</li>
                <li>Получайте информацию об акциях и скидках</li>
              </ul>
              <hr />
              <div className='promo-item__apps d-flex'>
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
  );
}

export default memo(Promo);

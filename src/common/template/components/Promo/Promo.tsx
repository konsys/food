import React, { memo } from 'react';
import './promo.less';

function Promo() {
  return (
    <section className="promo-block">
      <div className="container d-flex">
        <div className="promo-block__info d-flex justify-content-center align-items-center">
          <picture>
            <source srcSet="/img/icons/mobile-app.png 2x" type="image/webp" />
            <img
              src="/img/icons/mobile-app.png"
              alt="Приложение Broniboy"
              className="img-responsive"
            />
          </picture>
        </div>
        <div className="promo-block__info d-flex justify-content-center align-items-center">
          <div className="promo-item">
            <div className="promo-item__description">
              <div className="promo-item__title">С приложением еще лучше</div>
              <ul className="promo-item__list">
                <li>Отслеживайте курьера на карте</li>
                <li>Повторяйте прошлый заказ в один клик</li>
                <li>Получайте информацию об акциях и скидках</li>
              </ul>
              <hr />
              <div className="promo-item__apps d-flex">
                <a
                  href="/"
                  title="Broniboy"
                  className="app-btn app-btn_google-play"
                />
                <a
                  href="/"
                  title="Broniboy"
                  className="app-btn app-btn_app-store"
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

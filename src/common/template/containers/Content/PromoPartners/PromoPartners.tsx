import React, { memo } from 'react';
import { ReactComponent as MotoIcon } from './svg/moto.svg';
import { ReactComponent as RestarauntIcon } from './svg/restaurant.svg';
import { ReactComponent as RightArrowIcon } from './svg/right-arrow.svg';
import { ReactComponent as ForPartnersIcon } from './svg/for-partners.svg';

interface Props {}

function PromoPartners(props: Props) {
  const {} = props;

  return (
    <section className='container promo-partners'>
      <div className='row'>
        <div className='col-lg-4 promo-partner'>
          <div className='promo-partner__icon'>
            <MotoIcon />
          </div>
          <div className='promo-partner__title'>Курьерам</div>
          <div className='promo-partner__description'>
            Тебе достаточно пары ног и велосипеда, чтобы зарабатывать 20-30 тысяч в месяц и
            развиваться в крутейшей команде спецов
          </div>
          <a href='https://broniboy.ru/riders/' className='promo-partner__link' title='Подробнее'>
            Подробнее
            <RightArrowIcon className='promo-partners__arrow-icon' />
          </a>
        </div>
        <div className='col-lg-4 promo-partner'>
          <div className='promo-partner__icon'>
            <RestarauntIcon />
          </div>
          <div className='promo-partner__title'>Ресторанам</div>
          <div className='promo-partner__description'>
            Запустим быструю доставку из вашего ресторана за неделю. Потребуется только заключить
            договор и выслать меню.
          </div>
          <a href='/broniboy_for_partners.pdf' title='Подробнее' className='promo-partner__link'>
            Подробнее
            <RightArrowIcon className='promo-partners__arrow-icon' />
          </a>
        </div>
        <div className='col-lg-4 promo-partner'>
          <div className='promo-partner__icon'>
            <ForPartnersIcon />
          </div>
          <div className='promo-partner__title'>Для бизнеса</div>
          <div className='promo-partner__description'>
            Организуем доставку по городу день-в-день документов или заказов для ваших клиентов.
            Работаем без предоплаты.
          </div>
          <a href='https://b2b.broniboy.ru/' title='Подробнее' className='promo-partner__link'>
            Подробнее
            <RightArrowIcon className='promo-partners__arrow-icon' />
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(PromoPartners);

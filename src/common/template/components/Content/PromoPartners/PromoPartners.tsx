import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MotoIcon } from './svg/moto.svg';
import { ReactComponent as RestaurantIcon } from './svg/restaurant.svg';
import { ReactComponent as RightArrowIcon } from './svg/right-arrow.svg';
import { ReactComponent as ForPartnersIcon } from './svg/for-partners.svg';
import './promoPartners.less';

interface Props {}

function PromoPartners(props: Props) {
  const {} = props;

  return (
    <section className='container promo-partners'>
      <div className='row'>
        <div className='col-lg-4 promo-partner'>
          <div className='promo-partner__icon d-flex justify-content-start'>
            <MotoIcon />
          </div>
          <div className='promo-partner__title'>Курьерам</div>
          <div className='promo-partner__description'>
            Тебе достаточно пары ног и велосипеда, чтобы зарабатывать 20-30 тысяч в месяц и
            развиваться в крутейшей команде спецов
          </div>
          <Link to='/about' className='promo-partner__link' title='Подробнее'>
            Подробнее
            <RightArrowIcon className='promo-partners__arrow-icon' />
          </Link>
        </div>
        <div className='col-lg-4 promo-partner'>
          <div className='promo-partner__icon'>
            <RestaurantIcon />
          </div>
          <div className='promo-partner__title'>Ресторанам</div>
          <div className='promo-partner__description'>
            Запустим быструю доставку из вашего ресторана за неделю. Потребуется только заключить
            договор и выслать меню.
          </div>
          <Link to='/about' title='Подробнее' className='promo-partner__link'>
            Подробнее
            <RightArrowIcon className='promo-partners__arrow-icon' />
          </Link>
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
          <Link to='/about' title='Подробнее' className='promo-partner__link'>
            Подробнее
            <RightArrowIcon className='promo-partners__arrow-icon' />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default memo(PromoPartners);

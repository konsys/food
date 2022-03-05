import React, { memo } from 'react';
import './restaurantMenuMobileHeader.less';

interface Props {}

function RestaurantMobileHeader(props: Props) {
  const {} = props;

  return (
    <>
      <div className='restaurant__background--mobile'>
        <img
          src='https://images.broniboy.ru/NkAk4XYRx3yDUNLk2Bv-NPYuTt8=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/e980e7f4-1107-4be7-add4-8304f7441d00/63a67dcb5f942699244aae5b34363c2e.jpg'
          className='restaurant-bg-image'
          alt='REDWOK'
        />
      </div>
      <div className='restaurant-descr--mobile'>
        <div>
          <div className='restaurant-descr__delivery_info--mobile delivery_type--long_distance--mobile'>
            <img
              src='https://broniboy.ru/img/icons/delivery/long_distance.svg'
              alt='Дальняя доставка'
            />
            60-70 мин{' '}
          </div>
        </div>
        <h1>
          <span className='--title'>REDWOK</span>
        </h1>
      </div>
      <div className='restaurant__info--mobile'>
        <div className='container'>
          <span className='restaurant-box-second__rating--mobile'>
            <strong>5.0</strong>
            <svg
              width={13}
              height={12}
              viewBox='0 0 13 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z'
                fill='#76C032'
              />
            </svg>
          </span>
          <span className='restaurant-box-second__bull'>•</span>
          <span>Прием заказов до 20:30</span>
          <span className='restaurant-box-second__bull'>•</span>
          <span>₽</span>
        </div>
      </div>
      <div className='restaurant__info--mobile'>
        <div className='container'>
          <div className='delivery_type__title--mobile'>
            <div className='tooltip-information'>
              Дальняя доставка{' '}
              <svg
                width={17}
                height={17}
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M9.4375 13H7.73828V6.66016H9.4375V13ZM7.63867 5.01953C7.63867 4.76562 7.72266 4.55664 7.89062 4.39258C8.0625 4.22852 8.29492 4.14648 8.58789 4.14648C8.87695 4.14648 9.10742 4.22852 9.2793 4.39258C9.45117 4.55664 9.53711 4.76562 9.53711 5.01953C9.53711 5.27734 9.44922 5.48828 9.27344 5.65234C9.10156 5.81641 8.87305 5.89844 8.58789 5.89844C8.30273 5.89844 8.07227 5.81641 7.89648 5.65234C7.72461 5.48828 7.63867 5.27734 7.63867 5.01953Z'
                  fill='black'
                />
                <circle opacity='0.4' cx='8.5' cy='8.5' r='7.75' stroke='black' strokeWidth='1.5' />
              </svg>
            </div>
            <div className='delivery_type__price delivery_type__price--long_distance'>190 ₽</div>
          </div>
          <p className='delivery_type__description--mobile'>
            Ваш заказ будет доставлен курьерами Broniboy. Ресторан находится далеко от вашего
            адреса, поэтому доставка может занять более 40 минут.
          </p>
        </div>
      </div>
    </>
  );
}

export default memo(RestaurantMobileHeader);

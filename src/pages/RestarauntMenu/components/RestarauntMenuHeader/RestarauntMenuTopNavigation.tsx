import React from 'react';

interface Props {}

function RestarauntMenuTopNavigation(props: Props) {
  const {} = props;

  return (
    <section className='restaurant restaurant--shop' style={{ marginBottom: 0 }}>
      <div className='restaurant-content'>
        <div className='restaurant__background'>
          <img
            src='https://images.broniboy.ru/RBMkcsNpDbBAn3YAtSXoVdyzxEw=/1200x0/smart/filters:smart_sharpen():allow_webp(false)/own/d83eb13e-0245-40db-8e18-aa88db999859/fe4691e44863606f086421346c4b48fc.jpg'
            className='restaurant-bg-image'
            alt='Тарантино бар'
            style={{
              height: 'auto',
              width: 840,
              marginLeft: 0,
              marginTop: '-78.75px',
            }}
          />
        </div>
        <div className='restaurant-descr'>
          <h1>
            <span className='--title'>Тарантино бар</span>
          </h1>
          <i className='restaurant-descr__bull'>&nbsp;•&nbsp;</i>
          <span className='restaurant-box-second__rating' style={{ color: '#76C032' }}>
            <strong>5.0&nbsp;</strong>
            <svg
              width={38}
              height={37}
              viewBox='0 0 38 37'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18.0489 0.927049C18.3483 0.00573802 19.6517 0.00574017 19.9511 0.927051L23.7148 12.5106C23.8487 12.9227 24.2326 13.2016 24.6659 13.2016H36.8456C37.8143 13.2016 38.2171 14.4412 37.4333 15.0106L27.5798 22.1697C27.2293 22.4243 27.0826 22.8757 27.2165 23.2877L30.9802 34.8713C31.2796 35.7926 30.2251 36.5588 29.4414 35.9894L19.5878 28.8303C19.2373 28.5757 18.7627 28.5757 18.4122 28.8303L8.55862 35.9894C7.77491 36.5588 6.72043 35.7926 7.01978 34.8713L10.7835 23.2877C10.9174 22.8757 10.7707 22.4243 10.4202 22.1697L0.566653 15.0106C-0.217061 14.4412 0.185717 13.2016 1.15444 13.2016H13.3342C13.7674 13.2016 14.1513 12.9227 14.2852 12.5106L18.0489 0.927049Z'
                fill='#76C032'
              />
            </svg>
          </span>
          <div className='restaurant-info restaurant-info--shop'>
            <div className='restaurant-info__delivery'>
              <div className='restaurant-info__delivery-icon hidden delivery_type--long_distance'>
                <img src='/img/icons/delivery/long_distance.svg' alt='Дальняя доставка' />
              </div>
              <div className='restaurant-info__delivery-info hidden'>
                <span>70-80 мин&nbsp;•&nbsp;190 ₽&nbsp;</span>
                <span className='tooltip-information'>
                  <svg
                    width={17}
                    height={17}
                    viewBox='0 0 17 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.43945 13H7.74023V6.66016H9.43945V13ZM7.64062 5.01953C7.64062 4.76562 7.72461 4.55664 7.89258 4.39258C8.06445 4.22852 8.29688 4.14648 8.58984 4.14648C8.87891 4.14648 9.10938 4.22852 9.28125 4.39258C9.45312 4.55664 9.53906 4.76562 9.53906 5.01953C9.53906 5.27734 9.45117 5.48828 9.27539 5.65234C9.10352 5.81641 8.875 5.89844 8.58984 5.89844C8.30469 5.89844 8.07422 5.81641 7.89844 5.65234C7.72656 5.48828 7.64062 5.27734 7.64062 5.01953Z'
                      fill='white'
                    />
                    <circle cx='8.5' cy='8.5' r='7.75' stroke='white' strokeWidth='1.5' />
                  </svg>
                  <div className='tooltip-information__box'>
                    Ваш заказ будет доставлен курьерами Broniboy. Ресторан находится далеко от
                    вашего адреса, поэтому доставка может занять более 40 минут.
                  </div>
                </span>
                <br />
                <span>Дальняя доставка</span>
              </div>
            </div>
            <div className='restaurant-info__open-hours'>
              <span>Прием заказов до 21:00</span>
              <span>•</span>
              <span>₽₽₽</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestarauntMenuTopNavigation;

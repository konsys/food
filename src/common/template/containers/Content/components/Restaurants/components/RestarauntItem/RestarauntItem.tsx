import React, { memo } from 'react';

interface Props {}

function RestarauntItem(props: Props) {
  const {} = props;

  return (
    <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
      <div
        className='restaurant-box '
        data-place-data='{"id":"bfc14ebf-7406-41ed-9a69-e021f11035de","name":"\u0422\u0430\u0440\u0430\u043d\u0442\u0438\u043d\u043e \u0431\u0430\u0440","delivery_type":"long_distance","delivery_time":30,"index":0}'
      >
        <div className='restaurant-box-top'>
          <a href='https://broniboy.ru/nn/restaurants/p_tarantino-bar/' title='Тарантино бар'>
            <img
              data-src='https://images.broniboy.ru/tZDbZqbVOdR0B1-BfgLzMY1Zyj8=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/d83eb13e-0245-40db-8e18-aa88db999859/fe4691e44863606f086421346c4b48fc.jpg'
              title='Тарантино бар'
              alt='Тарантино бар'
              className='restaurant-cover-image transition lazyloaded'
              style={{
                width: 'auto',
                height: '255.938px',
                marginLeft: '-0.337982px',
                marginTop: 0,
              }}
              src='https://images.broniboy.ru/tZDbZqbVOdR0B1-BfgLzMY1Zyj8=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/d83eb13e-0245-40db-8e18-aa88db999859/fe4691e44863606f086421346c4b48fc.jpg'
            />

            <div className='restaurant-box-top-about clearfix'>
              <img
                data-src='https://images.broniboy.ru/sI9wujC5aXn2BKBymHli6poQnqE=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/67c905b1-740b-4082-85fe-b3b413b2980c/52bed14bffbf5e5a4a4878d9e70b347d.jpg'
                alt='Тарантино бар'
                className=' lazyloaded'
                src='https://images.broniboy.ru/sI9wujC5aXn2BKBymHli6poQnqE=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/67c905b1-740b-4082-85fe-b3b413b2980c/52bed14bffbf5e5a4a4878d9e70b347d.jpg'
              />
            </div>
          </a>
        </div>
        <div className='restaurant-box-second'>
          <a
            href='https://broniboy.ru/nn/restaurants/p_tarantino-bar/'
            className='restaurant-box-second__link'
            title='Тарантино бар'
          >
            <div className='restaurant-box-second__title'>Тарантино бар</div>
          </a>
          <div className='restaurant-box-second__description'>
            <span className='restaurant-box-second__rating' style={{ color: '#76C032' }}>
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
            <span className='restaurant-box-second__info'>Европейская кухня, </span>
            <span className='restaurant-box-second__info'>₽₽₽</span>
            <div className='restaurant-box-second__delivery'>
              <div>
                <img
                  src='https://broniboy.ru/img/icons/delivery/long_distance.svg'
                  className='restaurant-box-second__delivery-icon delivery_type--long_distance'
                  alt='Дальняя доставка'
                  title='Дальняя доставка'
                />
                <span className='restaurant-box-second__info'>190 ₽</span>
              </div>
              <div>
                <span className='restaurant-box-second__delivery-time'>70-80 мин</span>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
    </div>
  );
}

export default memo(RestarauntItem);

import React, { memo } from 'react';
import { ReactComponent as Rating } from '../../svg/rating.svg';
import { ReactComponent as LongDistance } from '../../svg/long_distance.svg';
import { ReactComponent as DeliveryStandard } from '../../svg/delivery-standard.svg';
import { ReactComponent as HightDemand } from '../../svg/high-demand.svg';

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
              <Rating className='restaurant-box-second__rating--star' />
            </span>
            <span className='restaurant-box-second__info'>Европейская кухня, </span>
            <span className='restaurant-box-second__info'>₽₽₽</span>
            <div className='restaurant-box-second__delivery'>
              <div>
                <LongDistance className='restaurant-box-second__delivery-icon delivery_type--long_distance' />
                <DeliveryStandard className='restaurant-box-second__delivery-icon delivery_type--default' />
                <HightDemand className='restaurant-box-second__delivery-icon delivery_type--high_demand' />

                <span className='restaurant-box-second__info'>190 ₽</span>
              </div>
              <div>
                <span className='restaurant-box-second__delivery-time'>70-80 мин</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RestarauntItem);

import React from 'react';
import { RatingDto } from '../../../../common/types/dto';
import RatingComponent from '../../../../common/template/components/RatingComponent/RatingComponent';

interface Props {
  restaruantImgSrc: string;
  restarauntName: string;
  rating: RatingDto;
}

function RestarauntMenuHeader(props: Props) {
  const { restarauntName, restaruantImgSrc, rating } = props;
  return (
    <section className='restaurant restaurant--shop' style={{ marginBottom: 0 }}>
      <div className='restaurant-content'>
        <div className='restaurant__background'>
          <img src={restaruantImgSrc} className='restaurant-bg-image' alt={restarauntName} />
        </div>
        <div className='restaurant-descr'>
          <h1>
            <span className='--title'>{restarauntName}</span>
          </h1>
          <i className='restaurant-descr__bull'>&nbsp;•&nbsp;</i>
          <span className='restaurant-box-second__rating'>
            <RatingComponent rating={rating} />
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

export default RestarauntMenuHeader;

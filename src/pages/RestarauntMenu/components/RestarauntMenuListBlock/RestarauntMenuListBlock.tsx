import React, { memo } from 'react';

interface Props {}

function RestarauntMenuListBlock(props: Props) {
  const {} = props;

  return (
    <>
      <div className='section-title' id='sushi'>
        <h2>Суши</h2>
      </div>
      <div className='service-list'>
        <div className='service-list__item'>
          <div className='restaurant-menu-item clearfix'>
            <div className='restaurant-menu-item__image restaurant-menu-item__image--full restaurant-menu-item__image--fill'>
              <img
                alt='Лосось'
                className=' lazyloaded'
                data-src='https://images.broniboy.ru/ceEEmrwC_RS_IbRoZE796E4y608=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/bc1b5bfd-a0f7-4447-bee6-de9bfcd42bd3/1643ea7e4c6ade46cd86428ddf24328b.jpg'
                src='https://images.broniboy.ru/ceEEmrwC_RS_IbRoZE796E4y608=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/bc1b5bfd-a0f7-4447-bee6-de9bfcd42bd3/1643ea7e4c6ade46cd86428ddf24328b.jpg'
              />
            </div>
            <div className='restaurant-menu-item-info'>
              <div className='restaurant-menu-item-info__title'>
                Лосось <span className='restaurant-menu-item-info__amount'>2 шт.</span>
              </div>
              <p>
                Свежий лосось на бруске японского риса, подается с имбирем и японской горчицей
                васаби.
              </p>
              <div className='restaurant-menu-item__prices'>
                <span className='restaurant-menu-item__price'>240 ₽</span>
              </div>
            </div>
          </div>
        </div>
        <div className='service-list__item'>
          <div className='restaurant-menu-item clearfix'>
            <div className='restaurant-menu-item__image restaurant-menu-item__image--full restaurant-menu-item__image--fill'>
              <img
                alt='Угорь'
                className=' lazyloaded'
                data-src='https://images.broniboy.ru/LPlfwRd2ZLCoWLMAOhDWjAJuwH8=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/25037303-414e-452c-9705-6a36d1e52007/da4c584debd0257437bbb65c19809c00.jpg'
                src='https://images.broniboy.ru/LPlfwRd2ZLCoWLMAOhDWjAJuwH8=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/25037303-414e-452c-9705-6a36d1e52007/da4c584debd0257437bbb65c19809c00.jpg'
              />
            </div>
            <div className='restaurant-menu-item-info'>
              <div className='restaurant-menu-item-info__title'>
                Угорь <span className='restaurant-menu-item-info__amount'>2 шт.</span>
              </div>
              <p>
                Копченный угорь на бруске японского риса, подается с имбирем и японской горчицей
                васаби.
              </p>
              <div className='restaurant-menu-item__prices'>
                <span className='restaurant-menu-item__price'>330 ₽</span>
              </div>
            </div>
          </div>
        </div>
        <div className='service-list__item'>
          <div className='restaurant-menu-item clearfix'>
            <div className='restaurant-menu-item__image restaurant-menu-item__image--full restaurant-menu-item__image--fill'>
              <img
                alt='Тунец'
                className=' lazyloaded'
                data-src='https://images.broniboy.ru/5P-VqUfzMiTgxG6vK-vFATj33NA=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/815b3d9f-5cda-4f50-ad57-10b943fa2209/9984dd808ec446b65332025e2d4a1293.jpg'
                src='https://images.broniboy.ru/5P-VqUfzMiTgxG6vK-vFATj33NA=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/815b3d9f-5cda-4f50-ad57-10b943fa2209/9984dd808ec446b65332025e2d4a1293.jpg'
              />
            </div>
            <div className='restaurant-menu-item-info'>
              <div className='restaurant-menu-item-info__title'>
                Тунец <span className='restaurant-menu-item-info__amount'>2 шт.</span>
              </div>
              <p>
                Свежий тунец на бруске японского риса, подается с имбирем и японской горчицей
                васаби.
              </p>
              <div className='restaurant-menu-item__prices'>
                <span className='restaurant-menu-item__price'>250 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='service-list' />
    </>
  );
}

export default memo(RestarauntMenuListBlock);

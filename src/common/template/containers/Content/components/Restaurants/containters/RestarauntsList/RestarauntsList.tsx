import React, { memo } from 'react';
import { uuid } from '../../../../../../../utils/utils';
import RestarauntItem, { EDeliveryType, EFoodType } from '../RestarauntItem/RestarauntItem';

interface Props {}

function RestarauntsList(props: Props) {
  const {} = props;

  return (
    <section className='restaurants'>
      <div className='container'>
        <header>
          <div className='restaurants-header-title restaurants-header-title--home-page'>
            <div className='page-title'>
              <h2>Самые популярные места</h2>
            </div>
          </div>
        </header>
        <div className='restaurants-body'>
          <div className='row'>
            {new Array(9).fill(3).map(() => (
              <RestarauntItem
                deliveryType={EDeliveryType.STANDARD}
                name='Тарантино бар'
                uuid={uuid()}
                img='https://images.broniboy.ru/-WAvLAfhsBKJaff_063zxBUp0gw=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/8d783828-84b1-4fc0-8d3e-022654859f98/ed97ddba3139ea9e714c59b69e5a26a0.jpg'
                logoUrl='https://images.broniboy.ru/sI9wujC5aXn2BKBymHli6poQnqE=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/67c905b1-740b-4082-85fe-b3b413b2980c/52bed14bffbf5e5a4a4878d9e70b347d.jpg'
                ratingColor='#76C032'
                rating='5.0'
                priceRate={3}
                deliveryFullTime='70-80 мин'
                foodType={EFoodType.CHINEESE}
                price={190}
              />
            ))}
          </div>
          <noscript />
        </div>
        <a
          href='https://broniboy.ru/nn/restaurants/'
          title='Посмотреть все рестораны'
          className='peach-btn peach-btn--category'
        >
          Посмотреть все рестораны
        </a>
      </div>
    </section>
  );
}

export default memo(RestarauntsList);

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { RestarauntDto } from '../../../../modules/Restaruants/types';
import RestarauntItem from '../RestarauntItem/RestarauntItem';
import './restarauntList.less';

interface Props {
  items: RestarauntDto[];
}

function RestarauntsList(props: Props) {
  const { items } = props;

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
            {items.map(
              ({
                deliveryType,
                foodType,
                id,
                image,
                logoUrl,
                name,
                price,
                priceRate,
                rating,
                ratingColor,
                uuid,
                description,
              }) => (
                <RestarauntItem
                  deliveryType={deliveryType}
                  name={name}
                  uuid={uuid}
                  image={image}
                  logoUrl='https://images.broniboy.ru/oqImvIfl3bVYngw-tF7D5_uOBHI=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/16d30944-4433-4ac6-bc3a-e543ff2ea12a/1ce5e674124599cd6b922c19e8a2ef68.jpg'
                  ratingColor={ratingColor}
                  rating={rating}
                  priceRate={priceRate}
                  foodType={foodType}
                  price={price}
                  id={id}
                  description={description}
                  key={uuid}
                />
              )
            )}
          </div>
          <noscript />
        </div>
        <Link to='/menu' title='Посмотреть все рестораны' className='peach-btn peach-btn--category'>
          Посмотреть все рестораны
        </Link>
      </div>
    </section>
  );
}

export default memo(RestarauntsList);

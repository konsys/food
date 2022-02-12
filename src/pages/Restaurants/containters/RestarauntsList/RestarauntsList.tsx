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
                  logoUrl={logoUrl}
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
        <Link
          to='/restaraunts/123456789'
          title='Посмотреть все рестораны'
          className='peach-btn peach-btn--category'
        >
          Посмотреть все рестораны
        </Link>
      </div>
    </section>
  );
}

export default memo(RestarauntsList);

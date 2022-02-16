import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantDto } from '../../../../modules/Restaruants/types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import './restaurantList.less';

interface Props {
  items: RestaurantDto[];
}

function RestaurantsList(props: Props) {
  const { items } = props;

  return (
    <section className='restaurants'>
      <div className='container restaraunts-list'>
        <header>
          <div className='restaurants-header-title'>
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
                <RestaurantItem
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
          to='/restaurants/123456789'
          title='Показать еще рестораны'
          className='restaraunts-list__upload-button main-btn'
        >
          Показать еще рестораны
        </Link>
      </div>
    </section>
  );
}

export default memo(RestaurantsList);

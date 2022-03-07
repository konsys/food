import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantDto } from '../../../../modules/restaurants/types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import './restaurantList.less';
import { deliveryFactory } from '../../../../modules/delivery/deliveryFactory';

interface Props {
  items: RestaurantDto[];
}

function RestaurantsList(props: Props) {
  const { items } = props;

  return (
    <section className='restaurants'>
      <div className='container restaurants-list'>
        <header>
          <div className='restaurants-header-title'>
            <div className='page-title'>
              <h2>Самые популярные места</h2>
            </div>
          </div>
        </header>
        <div className='restaurants-body'>
          <div className='row'>
            {/* TODO add delivery */}
            {items.map((restarauntItem, index) => (
              <RestaurantItem
                key={index}
                restaurant={restarauntItem}
                delivery={deliveryFactory.build()}
              />
            ))}
          </div>
          <noscript />
        </div>
        <div className='restaurants-list__show-more'>
          <Link
            to='/'
            title='Показать еще рестораны'
            className='restaurants-list__upload-button main-btn'
          >
            <span>Показать еще рестораны</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default memo(RestaurantsList);

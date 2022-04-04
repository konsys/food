import React, { memo, useEffect, useState } from 'react';
import { TRestaurantMenuOrder } from '../../../../../modules/cart/types';
import { RestaurantMenuDto } from '../../../../../modules/restaurantMenu/types';
import './restaurantMenuListItem.less';

type Props = {
  item: RestaurantMenuDto;
  addToCart: (item: RestaurantMenuDto) => void;
  cartOrder?: TRestaurantMenuOrder[];
};

function RestaurantMenuListItem({ item, addToCart, cartOrder }: Props) {
  const { name, image, description, price, amount, weight } = item;
  const [orderNumber, setOrderNumber] = useState<number | undefined>();

  useEffect(() => {
    const order = cartOrder?.find((v) => v.restaurantMenu.uuid === item.uuid);
    setOrderNumber(order?.quantity);
  }, [cartOrder]);

  return (
    <div className="service-list__item col-lg-4 col-md-6 col-sm-6 col-xs-12">
      <button
        type="button"
        onClick={() => addToCart(item)}
        className="service-list__item-add-to-cart-button"
      >
        <div className="restaurant-menu-item clearfix">
          <div className="restaurant-menu-item__image restaurant-menu-item__image--full restaurant-menu-item__image--fill">
            <img
              alt={name}
              className=" lazyloaded"
              src={image?.averageImg ? image.averageImg : ''}
            />
          </div>
          <div className="restaurant-menu-item-info">
            <div className="restaurant-menu-item-info__title">
              <h3>
                {orderNumber ? (
                  <span className="service-list__item-count">
                    {orderNumber}&nbsp;•&nbsp;
                  </span>
                ) : (
                  ''
                )}
                {name}
              </h3>
              {(amount || weight) && (
                <span className="restaurant-menu-item-info__amount">
                  {amount ? `${amount} шт.` : `${weight} гр.`}
                </span>
              )}
            </div>
            <p>{description}</p>
            <div>
              <span className="restaurant-menu-item__price">{price} ₽</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default memo(RestaurantMenuListItem);

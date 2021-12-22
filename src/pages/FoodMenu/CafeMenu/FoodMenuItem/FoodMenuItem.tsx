import React from 'react';
import './styles.scss';

export interface MenuItemCard {
  price: string;
  description: string;
  name: string;
  img: string;
}

interface Props {
  foodMenuItem: MenuItemCard;
}

export const FoodMenuItem = ({ foodMenuItem }: Props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="gallery-single">
          <h2>{foodMenuItem.name}</h2>
          <img src={foodMenuItem.img} className="img-fluid" alt="" />
          <div className="why-text">
            <p>{foodMenuItem.description}</p>
            <h4>{foodMenuItem.price}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

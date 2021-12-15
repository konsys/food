import React from "react";

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
      <div className="col-lg-4 col-md-6 special-grid drinks">
        <div className="gallery-single fix">
          <img src={foodMenuItem.img} className="img-fluid" alt="" />
          <div className="why-text">
            <h4>{foodMenuItem.name}</h4>
            <p>{foodMenuItem.description}</p>
            <h5>{foodMenuItem.price}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

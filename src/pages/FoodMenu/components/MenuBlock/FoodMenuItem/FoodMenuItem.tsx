import React from "react";
import "./styles.scss";

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
        <div className="gallery-single fix">
          <h2>{foodMenuItem.name}</h2>
          <img src={foodMenuItem.img} className="img-fluid" alt="" />
        </div>
        <div className="why-text">
          <p>{foodMenuItem.description}</p>
          <h5>{foodMenuItem.price}</h5>
        </div>
      </div>
    </>
  );
};

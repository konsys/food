import React from "react";
import { FoodMenuHeader } from "./FoodMenuHeader/FoodMenuHeader";
import { FoodMenuItem, MenuItemCard } from "./FoodMenuItem/FoodMenuItem";
import { FoodMenuLinks } from "./FoodMenuLinks/FoodMenuLinks";
import "./styles.scss";

interface Props {
  foodItems: MenuItemCard[];
}

export const MenuBlock = ({ foodItems }: Props) => {
  return (
    <div className="menu-box">
      <div className="container">
        <FoodMenuHeader />
        <FoodMenuLinks />

        <div className="row special-list">
          {foodItems.map(v => (
            <FoodMenuItem foodMenuItem={v} />
          ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { FoodMenuHeader } from "./FoodMenuHeader/FoodMenuHeader";
import { FoodMenuItem, MenuItemCard } from "./FoodMenuItem/FoodMenuItem";
import { FoodMenuLinks } from "./FoodMenuLinks/FoodMenuLinks";
import "./styles.scss";

interface Props {
  foodItems: MenuItemCard[];
}

export const CafeMenu = ({ foodItems }: Props) => {
  return (
    <div className="menu-box">
      <div className="container">
        <FoodMenuHeader />
        <FoodMenuLinks />

        <div className="row special-list">
          {foodItems.map((v, k) => (
            <FoodMenuItem foodMenuItem={v} key={k} />
          ))}
        </div>
      </div>
    </div>
  );
};

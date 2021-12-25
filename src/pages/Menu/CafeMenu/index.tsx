import React, { ReactElement } from 'react';
import { MenuHeader } from './MenuHeader';
import { MenuItem, MenuItemCard } from './MenuItem';
import { MenuLinks } from './MenuLinks/FoodMenuLinks';
import './styles.scss';

interface Props {
  foodItems: MenuItemCard[];
}

export const CafeMenu = ({ foodItems }: Props): ReactElement => {
  return (
    <div className='menu-box'>
      <div className='container'>
        <MenuHeader />
        <MenuLinks />

        <div className='row special-list'>
          {foodItems.map((v, k) => (
            <MenuItem foodMenuItem={v} key={k} />
          ))}
        </div>
      </div>
    </div>
  );
};

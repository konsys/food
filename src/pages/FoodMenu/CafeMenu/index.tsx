import React, { ReactElement } from 'react';
import { MenuHeader } from './MenuHeader/MenuHeader';
import { MenuItem, MenuItemCard } from './MenuItem/MenuItem';
import { MenuLinks } from './MenuLinks/MenuLinks';
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

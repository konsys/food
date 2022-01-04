import React, { ReactElement } from 'react';
import { TListResponce } from '../../../common/api/types';
import TemplatePagination from '../../../common/components/pagination/TemplatePagination';
import { MenuDto } from '../model/types';
import { MenuHeader } from './MenuHeader';
import { MenuItem } from './MenuItem';
import { MenuLinks } from './MenuLinks/FoodMenuLinks';
import './styles.scss';

interface Props {
  foodItems: TListResponce<MenuDto>;
}

export const CafeMenu = ({ foodItems }: Props): ReactElement => {
  return (
    <>
      <div className='menu-box'>
        <div className='container'>
          <MenuHeader />
          <MenuLinks />
          <div className='row special-list'>
            {foodItems.items.map((v, k) => (
              <MenuItem foodMenuItem={v} key={k} />
            ))}
          </div>
          <div className='row'>
            <TemplatePagination />
          </div>
        </div>
      </div>
    </>
  );
};

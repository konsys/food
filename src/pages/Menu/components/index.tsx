import { Pagination } from 'antd';
import React, { ReactElement } from 'react';
import { TListResponce } from '../../../common/api/types';
import { TVoidFn } from '../../../common/types';
import { MenuDto } from '../model/types';
import { MenuHeader } from './MenuHeader';
import { MenuItem } from './MenuItem';
import { MenuLinks } from './MenuLinks/FoodMenuLinks';
import './styles.scss';

interface Props {
  foodItems: TListResponce<MenuDto>;
  setPage: TVoidFn<number>;
}

export const CafeMenu = ({ foodItems, setPage }: Props): ReactElement => {
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
            <Pagination
              defaultCurrent={foodItems.page}
              total={foodItems.totalRecords}
              onChange={setPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

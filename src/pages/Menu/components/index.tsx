import { Pagination } from 'antd';
import React, { ReactElement } from 'react';
import { TListResponce } from '../../../common/api/types';
import { TVoidFn } from '../../../common/types';
import { MenuDto } from '../model/types';
import { MenuHeader } from './MenuHeader';
import { MenuItem } from './MenuItem';
import { MenuLinks } from './MenuLinks/FoodMenuLinks';
import './styles.scss';

export enum EFoodType {
  ALL = 'All',
  DRINKS = 'Drinks',
  SALADS = 'Salads',
  HOT = 'Hot',
}

interface Props {
  foodItems: TListResponce<MenuDto>;
  setPage: TVoidFn<number>;
  setPageSize: TVoidFn<number>;
}

export const CafeMenu = ({ foodItems, setPage, setPageSize }: Props): ReactElement => {
  return (
    <>
      <div className='menu-box'>
        <div className='container'>
          <MenuHeader />
          <MenuLinks menuType={EFoodType.DRINKS} />
          <div className='row special-list'>
            {foodItems.items.map((v, k) => (
              <MenuItem foodMenuItem={v} key={k} />
            ))}
          </div>
          <div className='row'>
            <Pagination
              current={+foodItems.page}
              defaultCurrent={1}
              total={+foodItems.totalRecords}
              onChange={setPage}
              onShowSizeChange={(_, size) => setPageSize(size)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

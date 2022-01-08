import { Pagination, Spin } from 'antd';
import React, { ReactElement } from 'react';
import { TListResponce } from '../../../common/api/types';
import { TVoidFn } from '../../../common/types';
import { MenuDto } from '../model/types';
import { MenuHeader } from './MenuHeader';
import { MenuListItem } from './MenuListItem';
import { MenuLinks } from './MenuLinks/FoodMenuLinks';
import './styles.scss';
import { EFoodType } from '../MenuList';

interface Props {
  menu: TListResponce<MenuDto>;
  setPage: TVoidFn<number>;
  setPageSize: TVoidFn<number>;
  activeFilter: EFoodType;
  setActiveFilter: TVoidFn<EFoodType>;
}

export const CafeMenu = ({
  menu,
  setPage,
  setPageSize,
  activeFilter,
  setActiveFilter,
}: Props): ReactElement => {
  return (
    <>
      <div className='menu-box'>
        <div className='container'>
          <MenuHeader />
          <MenuLinks activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          {!menu.pending ? (
            <>
              <div className='row special-list'>
                {!menu.items.length && 'Нет результатов'}
                {menu.items.map((v, k) => (
                  <MenuListItem foodMenuItem={v} key={k} />
                ))}
              </div>
              <div className='row'>
                <Pagination
                  current={menu.page}
                  defaultCurrent={1}
                  total={menu.totalRecords}
                  onChange={setPage}
                  onShowSizeChange={(_, size) => setPageSize(size)}
                />
              </div>
            </>
          ) : (
            <Spin />
          )}
        </div>
      </div>
    </>
  );
};

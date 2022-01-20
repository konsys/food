import { Card, Col, Pagination, Row, Spin } from 'antd';
import React, { ReactElement } from 'react';
import { TListResponce } from '../../../common/api/types';
import { TVoidFn } from '../../../common/types';
import { MenuDto } from '../model/types';
import { MenuHeader } from './MenuHeader';
import { MenuListItem } from './MenuListItem';
import { MenuLinks } from './MenuLinks/FoodMenuLinks';
import './styles.less';
import { EFoodType } from '../MenuListPage';
import Text from 'antd/lib/typography/Text';
import { CreateMenuModal } from '../containers/CreateMenu/CreateMenuModal';

interface Props {
  menu: TListResponce<MenuDto>;
  setPage: TVoidFn<number>;
  setPageSize: TVoidFn<number>;
  activeFilter: EFoodType;
  setActiveFilter: TVoidFn<EFoodType>;
}

export const MenuList = ({
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
          <Row>
            <Col span={24}>
              <CreateMenuModal />
            </Col>
          </Row>

          {!menu.pending ? (
            <>
              <div className='row special-list'>
                {!menu.items.length && (
                  <div className='mx-auto mt-5 mb-5'>
                    <Text disabled>Нет результатов</Text>
                  </div>
                )}
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {menu.items.map((v, k) => (
                    <Col xs={24} md={12} xl={8} key={k}>
                      <MenuListItem foodMenuItem={v} />
                    </Col>
                  ))}
                </Row>
              </div>
            </>
          ) : (
            <Spin />
          )}
          <div className='row'>
            <Pagination
              current={menu.page}
              defaultCurrent={1}
              total={menu.totalRecords}
              onChange={setPage}
              onShowSizeChange={(_, size) => setPageSize(size)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

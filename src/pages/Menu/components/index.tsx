import { Col, Pagination, Row, Space, Spin } from 'antd';
import React, { ReactElement } from 'react';
import { TListResponce } from '../../../common/api/types';
import { TVoidFn } from '../../../common/types';
import { MenuDto } from '../model/types';
import { MenuListItem } from './MenuListItem';
import './styles.less';
import { EFoodType } from '../MenuListPage';
import Text from 'antd/lib/typography/Text';
import { Nullable } from '../../../core/types';

interface Props {
  menu: TListResponce<MenuDto>;
  setPage: TVoidFn<number>;
  setPageSize: TVoidFn<number>;
  activeFilter: EFoodType;
  setActiveFilter: TVoidFn<EFoodType>;
  isEdit: boolean;
  setEditId: TVoidFn<Nullable<number>>;
}

export const MenuList = ({
  menu,
  setPage,
  setPageSize,
  setEditId,
  isEdit,
}: Props): ReactElement => {
  return (
    <>
      <Space direction='vertical'>
        {!menu.pending ? (
          <>
            {!menu.items.length && (
              <div className='mx-auto mt-5 mb-5'>
                <Text disabled>Нет результатов</Text>
              </div>
            )}
            <Space direction='horizontal'>
              <Row>
                {menu.items.map((v, k) => (
                  <Col xs={24} md={12} xl={8} key={k}>
                    <MenuListItem foodMenuItem={v} setEditId={setEditId} isEdit={isEdit} />
                  </Col>
                ))}
              </Row>
            </Space>
          </>
        ) : (
          <Spin />
        )}
        <Pagination
          current={menu.page}
          defaultCurrent={1}
          total={menu.totalRecords}
          onChange={setPage}
          onShowSizeChange={(_, size) => setPageSize(size)}
        />
      </Space>
    </>
  );
};

import { Col, Pagination, Row, Spin } from 'antd';
import React, { ReactElement } from 'react';
import { TListResponce } from '../../../common/api/types';
import { TVoidFn } from '../../../common/types';
import { MenuDto } from '../model/types';
import { MenuListItem } from './MenuListItem';
import './styles.less';
import { EFoodType } from '../MenuListPage';
import Text from 'antd/lib/typography/Text';

interface Props {
  menu: TListResponce<MenuDto>;
  setPage: TVoidFn<number>;
  setPageSize: TVoidFn<number>;
  activeFilter: EFoodType;
  setActiveFilter: TVoidFn<EFoodType>;
  isEdit: boolean;
}

export const MenuList = ({ menu, setPage, setPageSize, isEdit }: Props): ReactElement => {
  return (
    <>
      <Row gutter={[16, 16]}>
        {!menu.pending ? (
          <>
            {!menu.items.length && (
              <Col span={24}>
                <Text disabled>Нет результатов</Text>
              </Col>
            )}

            {menu.items.map((v, k) => (
              <Col xs={24} md={12} xl={6} key={k}>
                <MenuListItem foodMenuItem={v} isEdit={isEdit} />
              </Col>
            ))}
          </>
        ) : (
          <Spin />
        )}
        <Col span={24}>
          <Pagination
            current={menu.page}
            defaultCurrent={1}
            total={menu.totalRecords}
            onChange={setPage}
            onShowSizeChange={(_, size) => setPageSize(size)}
          />
        </Col>
      </Row>
    </>
  );
};

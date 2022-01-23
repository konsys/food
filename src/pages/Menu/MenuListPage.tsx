import { Button, Col, Row, Space } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { ReactElement, useState } from 'react';
import { MenuModel } from '../../store';
import { MenuList } from './components';
import { MenuModal } from './containers/MenuModal/MenuModal';

export enum EFoodType {
  ALL = 'All',
  DRINKS = 'Drinks',
  SALADS = 'Salads',
  HOT = 'Hot',
}
const { $listStore, setPage, setPageSize, ListGate, setFilter } = MenuModel;

export const MenuListPage = (): ReactElement => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const menu = useStore($listStore);
  useGate(ListGate, { limit: menu.limit, page: menu.page, filter: menu.filter });

  const [activeFilter, setActiveFilter] = useState<EFoodType>(EFoodType.ALL);

  return (
    <>
      <div className='menu-box'>
        <div className='container'>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Space>
                <MenuModal isEdit={isEdit} isVisible={isVisible} setIsVisible={setIsVisible} />

                <Button onClick={() => setIsEdit(isEdit ? false : true)}>
                  {!isEdit ? 'Редактировать' : 'Завершить'}
                </Button>
              </Space>
            </Col>

            <Col span={24}>
              <MenuList
                isEdit={isEdit}
                menu={menu}
                setPage={setPage}
                setPageSize={setPageSize}
                activeFilter={activeFilter}
                setActiveFilter={(v) => {
                  setActiveFilter(v);
                  v !== EFoodType.ALL
                    ? setFilter({ menuType: { name: v.toLowerCase() } })
                    : setFilter(null);
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

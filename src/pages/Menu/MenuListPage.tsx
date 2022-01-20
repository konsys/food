import { Button, Col, Row, Space } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { ReactElement, useState } from 'react';
import { Nullable } from '../../core/types';
import { MenuModel } from '../../store';
import { MenuList } from './components';
import { CreateMenuModal } from './containers/CreateMenu/CreateMenuModal';

export enum EFoodType {
  ALL = 'All',
  DRINKS = 'Drinks',
  SALADS = 'Salads',
  HOT = 'Hot',
}
const { $listStore, setPage, setPageSize, Gate, setFilter } = MenuModel;

export const MenuListPage = (): ReactElement => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<Nullable<number>>(null);
  const menu = useStore($listStore);
  useGate(Gate, { limit: menu.limit, page: menu.page, filter: menu.filter });
  const [activeFilter, setActiveFilter] = useState<EFoodType>(EFoodType.ALL);
  return (
    <>
      <div className='menu-box'>
        <div className='container'>
          <Row>
            <Col span={24}>
              <Space>
                <CreateMenuModal />
                <Button onClick={() => setIsEdit(isEdit ? false : true)}>
                  {!isEdit ? 'Редактировать' : 'Завершить'}
                </Button>
              </Space>
            </Col>
          </Row>

          <MenuList
            isEdit={isEdit}
            setEditId={setEditId}
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
        </div>
      </div>
    </>
  );
};

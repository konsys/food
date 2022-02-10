import { Button, Col, Row, Space } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { ReactElement, useState } from 'react';
import { MenuModel } from '../../store';
import { MenuList } from './components';
import { MenuModal } from './containers/MenuModal/MenuModal';

const { $listStore, setPage, setPageSize, ListGate, deleteItemFx } = MenuModel;

export function MenuListPage(): ReactElement {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const menu = useStore($listStore);
  useGate(ListGate, { limit: menu.limit, page: menu.page, filter: menu.filter });

  return (
    <div className='menu-box'>
      <div className='container'>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Space>
              <MenuModal id={null} />
              <Button onClick={() => setIsEdit(!isEdit)}>
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
              onDelete={deleteItemFx}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

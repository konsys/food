import { Button, Col, Row, Space, Table } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { ColumnsType } from '../../types';
import DeleteOutlined from '@ant-design/icons';
import { columnsNamesGenerator } from '../../form/columnsNamesGenerator';
import { DictionaryDto } from './types';
import { MenuTimeModel } from '../../../store';
import { MenuTimeModal } from '../../../pages/MenuTime/MenuTimeModal';

const { $listStore, ListGate, deleteFx } = MenuTimeModel;

function getColumns<T>(): ColumnsType<T> {
  const name = columnsNamesGenerator<DictionaryDto>();
  return [
    {
      title: 'Название',
      dataIndex: name('name'),
      render: (v) => <Button type='link'>{v}</Button>,
    },
    {
      title: 'Описание',
      dataIndex: name('description'),
    },
    {
      title: 'Удалить',
      render: () => (
        <Button danger type='link' icon={<DeleteOutlined />}>
          Удалить
        </Button>
      ),
    },
  ];
}

export function MenuTimeListPage<T>(): ReactElement {
  const list = useStore($listStore);
  useGate(ListGate);

  return (
    <>
      <div className='menu-box'>
        <div className='container'>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Space>
                <MenuTimeModal title='Создать время меню' />
              </Space>
            </Col>

            <Col span={24}>
              <Table columns={getColumns<DictionaryDto>()} dataSource={list.items}></Table>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

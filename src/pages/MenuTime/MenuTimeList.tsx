import { Button, Col, Row, Table } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { columnsNamesGenerator } from '../../common/form/columnsNamesGenerator';
import { ColumnsType } from '../../common/types';
import { MenuTimeModel } from '../../store';
import { MenuTimeDto } from './menuTimeModel/types';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';

const { $listStore, ListGate } = MenuTimeModel;

const name = columnsNamesGenerator<MenuTimeDto>();

const columns: ColumnsType<MenuTimeDto> = [
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
    render: (v) => (
      <Button danger type='link' icon={<DeleteOutlined />}>
        Удалить
      </Button>
    ),
  },
];

export const MenuTimeListPage = (): ReactElement => {
  const list = useStore($listStore);
  useGate(ListGate);

  return (
    <>
      <div className='menu-box'>
        <div className='container'>
          <Row>
            <Col span={24}>
              <Table columns={columns} dataSource={list.items}></Table>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

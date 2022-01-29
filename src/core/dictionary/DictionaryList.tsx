import { Button, Col, Row, Space, Table } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { ReactElement, useMemo } from 'react';
import { ColumnsType } from '../../common/types';
import DeleteOutlined from '@ant-design/icons';
import { columnsNamesGenerator } from '../../common/form/columnsNamesGenerator';
import { DictionaryDto } from './types';
import { MenuTimeModal } from '../../pages/MenuTime/MenuTimeModal';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { DictionaryModal } from './DictionaryModal';

function getColumns(): ColumnsType<DictionaryDto> {
  const name = columnsNamesGenerator<DictionaryDto>();
  return [
    {
      title: 'Название',
      dataIndex: name('name'),
      render: (v, row) => <DictionaryModal title={v} id={row.id} />,
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

interface Props<CreateEntity, FullEntity> {
  model: TCrudStore<CreateEntity, FullEntity>;
}

export function DictionaryList<CreateEntity, FullEntity>({
  model,
}: Props<CreateEntity, FullEntity>): ReactElement {
  const { $listStore, ListGate } = useMemo(() => model, []);

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
              <Table rowKey={'id'} columns={getColumns()} dataSource={list.items}></Table>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

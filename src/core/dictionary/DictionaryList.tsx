import { Col, Row, Space, Table } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { ColumnsType, TItemWithUuid } from '../../common/types';
import { columnsNamesGenerator } from '../../common/form/columnsNamesGenerator';
import { DictionaryDto } from './types';
import { TCrudStore, TDeleteItemFx } from '../../common/models/abstractModel/abstractCrudModel';
import { DictionaryModal } from './DictionaryModal';
import { isNumber } from '../../common/utils/utils';
import { DeleteButton } from '../../common/components/buttons/DeleteButton/DeleteButton';

function getColumns<T extends DictionaryDto>(
  model: TCrudStore<T>,
  onDelete: TDeleteItemFx
): ColumnsType<T> {
  const name = columnsNamesGenerator<T>();
  return [
    {
      title: 'Название',
      dataIndex: name('name'),
      render: (v, row) => (
        <DictionaryModal model={model} buttonText={v} uuid={row.uuid} buttonType='link' />
      ),
    },
    {
      title: 'Описание',
      dataIndex: name('description'),
    },
    {
      title: 'Удалить',
      render: (_, row) => isNumber(row.id) && <DeleteButton id={row.id} onDelete={onDelete} />,
    },
  ];
}

interface Props<T> {
  model: TCrudStore<TItemWithUuid<T>>;
}

export function DictionaryList<T extends DictionaryDto>({ model }: Props<T>): ReactElement {
  const { $listStore, ListGate, deleteItemFx } = model;

  const list = useStore($listStore);
  useGate(ListGate);

  return (
    <div className='menu-box'>
      <div className='container'>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Space>
              <DictionaryModal model={model} uuid={null} />
            </Space>
          </Col>

          <Col span={24}>
            <Table
              rowKey='id'
              columns={getColumns<T>(model, deleteItemFx)}
              dataSource={list.items}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

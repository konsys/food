import { Col, Row, Space, Table } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { ColumnsType } from '../../common/types';
import { columnsNamesGenerator } from '../../common/form/columnsNamesGenerator';
import { DictionaryDto } from './types';
import { TCrudStore, TDeleteItemFx } from '../../common/models/abstractModel/abstractCrudModel';
import { DictionaryModal } from './DictionaryModal';
import { isNumber } from '../../common/utils/utils';
import { DeleteButton } from '../../common/components/buttons/DeleteButton/DeleteButton';
import { TItemStore } from '../../common/api/types';

function getColumns<T extends DictionaryDto>(
  model: TCrudStore<T>,
  onDelete: TDeleteItemFx,
  item: TItemStore<T>
): ColumnsType<T> {
  const name = columnsNamesGenerator<T>();
  return [
    {
      title: 'Название',
      dataIndex: name('name'),
      render: (v, row) => (
        <DictionaryModal
          model={model}
          itemProps={{
            id: row.id,
            getItem: model.getItem,
            item,
          }}
        />
      ),
    },
    {
      title: 'Описание',
      dataIndex: name('description'),
    },
    {
      title: 'Удалить',
      render: (_, row) => {
        return isNumber(row.id) && <DeleteButton id={row.id} onDelete={onDelete} />;
      },
    },
  ];
}

interface Props<T> {
  model: TCrudStore<T>;
}

export function DictionaryList<T extends DictionaryDto>({ model }: Props<T>): ReactElement {
  const { $listStore, ListGate, deleteItemFx, $itemStore } = model;

  const list = useStore($listStore);
  const item = useStore($itemStore);
  useGate(ListGate);

  return (
    <>
      <div className='menu-box'>
        <div className='container'>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Space>
                <DictionaryModal
                  model={model}
                  itemProps={{
                    id: null,
                  }}
                />
              </Space>
            </Col>

            <Col span={24}>
              <Table
                rowKey={'id'}
                columns={getColumns<T>(model, deleteItemFx, item)}
                dataSource={list.items}
              ></Table>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

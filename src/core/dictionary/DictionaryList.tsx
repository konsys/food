import { Col, Row, Space, Table } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { ColumnsType } from '../../common/types';
import { columnsNamesGenerator } from '../../common/form/columnsNamesGenerator';
import { DictionaryDto } from './types';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { DictionaryModal } from './DictionaryModal';
import { Event } from 'effector';
import { isNumber } from '../../common/utils/utils';
import { DeleteButton } from '../../common/components/buttons/DeleteButton/DeleteButton';

function getColumns<CreateEntity>(
  model: TCrudStore<CreateEntity>,
  modalTitle: string,
  getItem: Event<number>,
  onDelete: Event<number>
): ColumnsType<DictionaryDto> {
  const name = columnsNamesGenerator<DictionaryDto>();
  return [
    {
      title: 'Название',
      dataIndex: name('name'),
      render: (v, row) => (
        <DictionaryModal
          buttonType='link'
          model={model}
          createButtonText={v}
          modalTitle={modalTitle}
          getItem={getItem}
          id={isNumber(row.id) ? row.id : undefined}
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

interface Props<CreateEntity> {
  model: TCrudStore<CreateEntity>;
  modalTitle: string;
  createButtonText?: string;
}

export function DictionaryList<CreateEntity>({
  model,
  modalTitle,
  createButtonText,
}: Props<CreateEntity>): ReactElement {
  const { $listStore, ListGate, deleteItem, getItem } = model;

  const list = useStore($listStore);
  useGate(ListGate);

  return (
    <>
      <div className='menu-box'>
        <div className='container'>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Space>
                <DictionaryModal
                  buttonType='primary'
                  model={model}
                  modalTitle={modalTitle}
                  createButtonText={createButtonText}
                />
              </Space>
            </Col>

            <Col span={24}>
              <Table
                rowKey={'id'}
                columns={getColumns<CreateEntity>(model, modalTitle, getItem, deleteItem)}
                dataSource={list.items}
              ></Table>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

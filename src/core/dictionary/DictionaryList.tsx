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
import { Event } from 'effector';

function getColumns<CreateEntity>(
  model: TCrudStore<CreateEntity>,
  modalTitle: string,
  getItem: Event<number>,
  onDelete: TDeleteItemFx
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
  const { $listStore, ListGate, deleteItemFx, getItem } = model;

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
                columns={getColumns<CreateEntity>(model, modalTitle, getItem, deleteItemFx)}
                dataSource={list.items}
              ></Table>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

import { Button, Col, Row, Space, Table } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { ReactElement } from 'react';
import { ColumnsType } from '../../common/types';
import DeleteOutlined from '@ant-design/icons';
import { columnsNamesGenerator } from '../../common/form/columnsNamesGenerator';
import { DictionaryDto } from './types';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { DictionaryModal } from './DictionaryModal';
import { Event } from 'effector';
import { isNumber } from '../../common/utils/utils';

function getColumns<CreateEntity>(
  model: TCrudStore<CreateEntity>,
  modalTitle: string,
  loadItem: Event<number>
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
          loadItem={loadItem}
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
      render: () => (
        <Button danger type='link' icon={<DeleteOutlined />}>
          Удалить
        </Button>
      ),
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
  const { $listStore, ListGate, loadItem } = model;

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
                columns={getColumns<CreateEntity>(model, modalTitle, loadItem)}
                dataSource={list.items}
              ></Table>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

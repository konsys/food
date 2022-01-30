import { Button, Col, Row, Space, Table } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { ReactElement, useMemo } from 'react';
import { ColumnsType } from '../../common/types';
import DeleteOutlined from '@ant-design/icons';
import { columnsNamesGenerator } from '../../common/form/columnsNamesGenerator';
import { DictionaryDto } from './types';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { DictionaryModal } from './DictionaryModal';
import { Event } from 'effector';
import { isNullOrUndefined, isNumber } from '../../common/utils/utils';

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
          model={model}
          createButtonText={v}
          modalTitle={modalTitle}
          loadItem={isNumber(row.id) && loadItem(row.id)}
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
  const { $listStore, ListGate, loadItem } = useMemo(() => model, []);

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

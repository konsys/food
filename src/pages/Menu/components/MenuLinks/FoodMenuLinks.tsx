import { Col, Row } from 'antd';
import React from 'react';
import { TVoidFn } from '../../../../common/types';
import { EFoodType } from '../../MenuListPage';

interface Props {
  setActiveFilter: TVoidFn<EFoodType>;
  activeFilter: EFoodType;
}

export function MenuLinks({ activeFilter, setActiveFilter }: Props) {
  return (
    <Row>
        <Col span={24}>
          <div className='special-menu text-center'>
            <div className='button-group filter-button-group'>
              <button
                className={activeFilter === EFoodType.ALL ? 'active' : ''}
                onClick={() => setActiveFilter(EFoodType.ALL)}
              >
                All
              </button>
              <button
                className={activeFilter === EFoodType.DRINKS ? 'active' : ''}
                onClick={() => setActiveFilter(EFoodType.DRINKS)}
              >
                Drinks
              </button>
              <button
                className={activeFilter === EFoodType.SALADS ? 'active' : ''}
                onClick={() => setActiveFilter(EFoodType.SALADS)}
              >
                Salads
              </button>
              <button
                className={activeFilter === EFoodType.HOT ? 'active' : ''}
                onClick={() => setActiveFilter(EFoodType.HOT)}
              >
                Hot
              </button>
            </div>
          </div>
        </Col>
      </Row>
  );
}

import { Button, Col, Row } from 'antd';
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
            <Button
              className={activeFilter === EFoodType.ALL ? 'active' : ''}
              onClick={() => setActiveFilter(EFoodType.ALL)}
            >
              All
            </Button>
            <Button
              className={activeFilter === EFoodType.DRINKS ? 'active' : ''}
              onClick={() => setActiveFilter(EFoodType.DRINKS)}
            >
              Drinks
            </Button>
            <Button
              className={activeFilter === EFoodType.SALADS ? 'active' : ''}
              onClick={() => setActiveFilter(EFoodType.SALADS)}
            >
              Salads
            </Button>
            <Button
              className={activeFilter === EFoodType.HOT ? 'active' : ''}
              onClick={() => setActiveFilter(EFoodType.HOT)}
            >
              Hot
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

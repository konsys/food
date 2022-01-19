import { Button, Col, Row } from 'antd';
import React from 'react';
import { Params } from '../../../../config/params';
import { MenuDto } from '../../model/types';
import './styles.less';

interface Props {
  foodMenuItem: MenuDto;
}

export const MenuListItem = ({ foodMenuItem }: Props) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={8}>
              <h2>{foodMenuItem.name}</h2>
            </Col>
            <Col span={8}>
              <span>{foodMenuItem.price}</span>
            </Col>
            <Col span={8}>
              <Button type='ghost'>Заказать</Button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <img
                src={`${Params.BASE_URL}/${foodMenuItem.image?.averageImg}` ?? ''}
                className='img-fluid'
                alt={foodMenuItem.name}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div>{foodMenuItem.description}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

import { Card, Col, Image, Row } from 'antd';
import React from 'react';
import { Params } from '../../../../config/params';
import { MenuDto } from '../../model/types';
import { MenuItemAddToCard } from '../MenuItemAddToCard/MenuItemAddToCard';
import { MenuItemDescription } from '../MenuItemDescription/MenuItemDescription';
import { MenuItemPrice } from '../MenuItemPrice/MenuItemPrice';
import { MenuItemTitle } from '../MenuItemTitle/MenuItemTitle';
import { MenuItemWeigth } from '../MenuItemWeigth/MenuItemWeigth';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';
import './style.less';
import { MenuModal } from '../../containers/MenuModal/MenuModal';
import { DeleteButton } from '../../../../common/components/buttons/DeleteButton/DeleteButton';
import { TDeleteItemFx } from '../../../../common/models/abstractModel/abstractCrudModel';
interface Props {
  foodMenuItem: MenuDto;
  isEdit: boolean;
  onDelete: TDeleteItemFx;
}

export const MenuListItem = ({ foodMenuItem, isEdit, onDelete }: Props) => {
  return (
    <>
      <Card
        className='menu-item-card'
        title={
          <Row align='middle' justify='space-between'>
            {!isEdit ? (
              <>
                <Col span={20}>
                  <MenuItemTitle text={foodMenuItem.name} />
                </Col>
                <Col span={4}>
                  <MenuItemAddToCard component={<PlusCircleOutlined />} />
                </Col>
              </>
            ) : (
              <>
                <Col span={18} className='edit-menu'>
                  <MenuModal
                    buttonText={foodMenuItem.name}
                    id={foodMenuItem.id}
                    buttonType='link'
                  />
                </Col>
                <Col span={6} className='delete-menu'>
                  <DeleteButton id={foodMenuItem.id} onDelete={onDelete} />
                </Col>
              </>
            )}
          </Row>
        }
      >
        <Row justify='center' gutter={[0, 16]}>
          <Col span={24} flex='center' className='menu-item-img'>
            <Image
              alt={foodMenuItem.name}
              src={
                `${Params.BASE_URL}/${foodMenuItem.image?.averageImg}` ??
                `${Params.BASE_URL}/no-img-ready.jpg`
              }
            />
          </Col>

          <Col span={24}>
            <MenuItemDescription text={foodMenuItem.description} />
          </Col>

          <Col span={12}>
            <MenuItemWeigth text={foodMenuItem.weight} />
          </Col>
          <Col span={12}>
            <MenuItemPrice text={foodMenuItem.price} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

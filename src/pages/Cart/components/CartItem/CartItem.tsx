import React, { memo } from 'react';
import { Row, Col } from 'antd';
import { TUuid, TVoidFn } from '../../../../common/types';
import { NullableNumber } from '../../../../core/types';
import { RestaurantMenuDto } from '../../../../modules/restaurantMenu/types';
import { ReactComponent as DeleteButton } from './svg/deleteButton.svg';
import { ReactComponent as PlusButton } from './svg/plusButton.svg';
import { ReactComponent as MinusButton } from './svg/minusButton.svg';
import './cartItem.less';
import { LOCALE } from '../../../../config/params';

export type TModidificator = {
  price: NullableNumber;
  key: string;
  value: string;
};
interface Props {
  modificators?: TModidificator[];
  item: RestaurantMenuDto;
  quiantity: number;
  changeQuantity: (uuid: TUuid, delta: number) => void;
  deleteFromCart: TVoidFn<TUuid>;
}

function CartItem(props: Props) {
  const { modificators, item, quiantity, changeQuantity, deleteFromCart } =
    props;

  return (
    <div className="cart-item">
      <Row>
        <Col span={16} className="cart-item__title">
          {item.name}
        </Col>
        <Col span={6} className="cart-item__description">
          {item.weight} г.
        </Col>
        <Col span={2} style={{ textAlign: 'right' }}>
          <button
            className="cart-item__delete-button"
            type="button"
            onClick={() => deleteFromCart(item.uuid)}
          >
            <DeleteButton />
          </button>
        </Col>

        <Col span={16}>
          <button type="button" onClick={() => changeQuantity(item.uuid, 1)}>
            <PlusButton />
          </button>

          <input type="text" value={quiantity} disabled />

          <button
            disabled={quiantity < 2}
            type="button"
            onClick={() => changeQuantity(item.uuid, -1)}
          >
            <MinusButton />
          </button>
        </Col>
        <Col span={8} className="cart-item__quantity">
          <span>{(item.price * quiantity).toLocaleString(LOCALE)}</span> ₽
        </Col>
      </Row>
    </div>
  );
}

export default memo(CartItem);

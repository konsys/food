import { Row, Col } from 'antd';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TItem } from '../../../../common/api/types';
import { CartDto } from '../../../../modules/cart/types';
import './cartLink.less';

interface Props {
  cart: TItem<CartDto>;
}

function CartLink(props: Props) {
  const { cart } = props;

  return (
    <Row className="cart-link_active">
      <Col>
        <Link to={`/cart/${cart?.item?.uuid}`} title="Корзина" rel="nofollow">
          <b>{cart?.item?.orderSum} ₽</b>
        </Link>
      </Col>
    </Row>
  );
}

export default memo(CartLink);

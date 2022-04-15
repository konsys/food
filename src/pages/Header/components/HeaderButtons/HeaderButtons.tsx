import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TItemWithUuid } from '../../../../common/types';
import { Nullable } from '../../../../core/types';
import { CartDto } from '../../../../modules/cart/types';
import { LoginPage } from '../../../Login/Login';
import './headerButtons.less';

type Props = {
  cart?: Nullable<TItemWithUuid<CartDto>>;
};

const HeaderButtons = ({ cart }: Props) => (
  <nav className="header-nav header-buttons d-flex float-end">
    <ul className="list-clear clearfix">
      <li className="d-none d-md-flex ">
        {cart?.orderSum ? (
          <Link
            to={`/cart/${cart?.uuid}`}
            title="Корзина"
            rel="nofollow"
            className="header-nav-item-link-basket header-nav-item-link-basket_active header-nav-item-link-basket_active-animate"
          >
            <b>{cart?.orderSum} ₽</b>
          </Link>
        ) : (
          <span
            title="Корзина пуста"
            className="header-nav-item-link-basket-stub"
          />
        )}
      </li>
      <li>
        <LoginPage />
      </li>
    </ul>
  </nav>
);

export default memo(HeaderButtons);

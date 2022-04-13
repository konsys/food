import { Button } from 'antd';
import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { TItemWithUuid } from '../../../../common/types';
import { Nullable } from '../../../../core/types';
import { CartDto } from '../../../../modules/cart/types';
import { LoginDto } from '../../../../modules/login/types';
import { LoginModel } from '../../../../store';
import LoginFields from '../LoginFields/LoginFields';
import './headerButtons.less';

type Props = {
  cart?: Nullable<TItemWithUuid<CartDto>>;
};

const { createItemFx } = LoginModel;

const HeaderButtons = ({ cart }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ModalForm } = useValidatedForm<LoginDto>();
  return (
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
          <ModalForm
            modalVisible={isVisible}
            setModalVisible={setIsVisible}
            pending={false}
            onCreate={createItemFx}
            buttonClassName="header-nav-item-link__login"
            buttonText="Войти"
            title="Войти"
          >
            <LoginFields />
          </ModalForm>
        </li>
      </ul>
    </nav>
  );
};

export default memo(HeaderButtons);

import React, { memo, useState } from 'react';
import { Row, Col } from 'antd';
import { useGate, useStore } from 'effector-react';
import LoginPage from '../../Auth/Login/LoginModal';
import CartLink from '../components/CartLink/CartLink';
import CartStub from '../components/CartStub/CartStub';
import RegistrationModal from '../../Auth/Registration/RegistrationModal';
import { CartModel } from '../../../store';
import { getClientUuid } from '../../../modules/cart/service';

import './headerButtons.less';

const { ItemGate: CartGate, $itemStore: cartStore } = CartModel;

const HeaderButtons = () => {
  useGate(CartGate, getClientUuid());
  const cart = useStore(cartStore);
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const setIsRegistration = () => {
    setIsLoginVisible(false);
    setIsRegistrationVisible(true);
  };

  return (
    <Row gutter={8}>
      <Col>
        {cart?.item?.orderSum ? <CartLink cart={cart} /> : <CartStub />}
      </Col>
      <Col>
        <RegistrationModal
          isVisible={isRegistrationVisible}
          setIsVisible={setIsRegistrationVisible}
        />

        <LoginPage
          setIsRegistration={setIsRegistration}
          isVisible={isLoginVisible}
          setIsVisible={setIsLoginVisible}
        />
      </Col>
    </Row>
  );
};

export default memo(HeaderButtons);

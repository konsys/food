import React, { memo, useState } from 'react';
import { Row, Col } from 'antd';
import { TItem } from '../../../common/api/types';
import { CartDto } from '../../../modules/cart/types';
import LoginPage from '../../Auth/Login/LoginModal';
import CartLink from '../components/CartLink/CartLink';
import CartStub from '../components/CartStub/CartStub';
import RegistrationModal from '../../Auth/Registration/RegistrationModal';

import './headerButtons.less';

type Props = {
  cart?: TItem<CartDto>;
};

const HeaderButtons = ({ cart }: Props) => {
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

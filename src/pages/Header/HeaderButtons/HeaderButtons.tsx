import { Row, Col } from 'antd';
import { useStore } from 'effector-react';
import React, { memo, useEffect, useState } from 'react';
import { TItem } from '../../../common/api/types';
import { useValidatedForm } from '../../../common/form/useValidatedForm';
import { uuid } from '../../../common/utils/utils';
import { CartDto } from '../../../modules/cart/types';
import { LoginDto, TTokens } from '../../../modules/login/types';
import { RegistrationDto } from '../../../modules/registration/types';
import { $user } from '../../../modules/user/store';
import { AuthModel, RegistrationModel } from '../../../store';
import LoginPage from '../../Login/Login';
import CartLink from '../components/CartLink/CartLink';
import CartStub from '../components/CartStub/CartStub';
import './headerButtons.less';

type Props = {
  cart?: TItem<CartDto>;
};

const { createNewItemFx: login, $itemStore: $loginStore } = AuthModel;
const { createNewItemFx: registration } = RegistrationModel;

const HeaderButtons = ({ cart }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const user = useStore($user);

  const { error } = useStore($loginStore);
  const [isRegistration, setIsRegistration] = useState(false);
  const { ModalForm: LoginForm, formInstance: loginFormInstanse } =
    useValidatedForm<LoginDto, TTokens>({
      uuid: uuid(),
    });
  const { ModalForm: RegistrationForm } = useValidatedForm<RegistrationDto>({
    uuid: uuid(),
  });

  useEffect(() => {
    if (!isVisible) {
      setIsRegistration(false);
    }
  }, [setIsRegistration, isVisible]);

  const onLogin = async () =>
    loginFormInstanse.validateFields().then(async (loginForm) => {
      await login(loginForm);
      // onSuccessLogin(loginForm);
      console.log(1111111111, loginForm);
    });

  console.log(1111111111, error);

  // useEffect(() => {
  //   if (!loginStore?.error) {
  //     loginFormInstanse.setFields([
  //       {
  //         name: 'email',
  //         errors: [loginStore.error?.message ?? ''],
  //         value: 'wefwef',
  //       },
  //     ]);
  //   }
  // }, [loginStore?.error]);

  return (
    <Row gutter={8} className="d-flex float-end">
      <Col className="d-none d-md-flex ">
        {cart?.item?.orderSum ? <CartLink cart={cart} /> : <CartStub />}
      </Col>
      <Col>
        <LoginPage
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          login={login}
          registration={registration}
          user={user}
          isRegistration={isRegistration}
          setIsRegistration={setIsRegistration}
          LoginForm={LoginForm}
          RegistrationForm={RegistrationForm}
          onLogin={onLogin}
          loginError="wefwg"
        />
      </Col>
    </Row>
  );
};

export default memo(HeaderButtons);

import React, { memo, useEffect } from 'react';
import { useStore } from 'effector-react';
import { useValidatedForm } from '../../../common/form/useValidatedForm';
import { HttpStatus } from '../../../common/utils/constants';
import { uuid } from '../../../common/utils/utils';
import { LoginDto, TTokens } from '../../../modules/login/types';
import { AuthModel } from '../../../store';
import LoginFields from '../../Header/components/LoginFields/LoginFields';
import UserAvatarIcon from '../../UserPage/UserAvatarIcon';
import { onSuccessLogin } from '../model/store';
import { $user } from '../../../modules/user/store';
import { TVoidFn } from '../../../common/types';

const { $itemStore: $loginStore, resetOne } = AuthModel;

interface Props {
  isVisible: boolean;
  setIsVisible: TVoidFn<boolean>;
  setIsRegistration: TVoidFn<boolean>;
}

function LoginModal({ setIsRegistration, isVisible, setIsVisible }: Props) {
  const { ModalForm: LoginForm, formInstance: loginFormInstanse } =
    useValidatedForm<LoginDto, TTokens>({
      uuid: uuid(),
    });

  const { createNewItemFx: login } = AuthModel;
  const { error } = useStore($loginStore);
  const loginError =
    error?.statusCode === HttpStatus.UNAUTHORIZED ? 'Неверный пароль' : '';
  useEffect(() => {
    resetOne();
  }, [isVisible]);

  const onLogin = async () =>
    loginFormInstanse.validateFields().then(async (loginForm) => {
      const res = await login(loginForm);
      onSuccessLogin(res);
      setIsVisible(false);
    });

  const user = useStore($user);

  const formComponent = (
    <LoginForm
      modalVisible={isVisible}
      setModalVisible={setIsVisible}
      pending={false}
      onCreate={login}
      buttonClassName="header-nav-item-link__login"
      buttonText="Войти"
      title="Войти"
      modalOnOk={onLogin}
    >
      <LoginFields
        loginError={loginError}
        setIsRegistration={setIsRegistration}
      />
    </LoginForm>
  );
  return <div>{user ? <UserAvatarIcon user={user} /> : formComponent}</div>;
}

export default memo(LoginModal);

import { useStore } from 'effector-react';
import React, { memo, useEffect } from 'react';
import { TCreateItemFx } from '../../common/models/abstractModel/abstractCrudModel';
import { TItemWithUuid, TPromiseFn, TVoidFn } from '../../common/types';
import { Nullable } from '../../core/types';
import { LoginDto, TTokens } from '../../modules/login/types';
import { RegistrationDto } from '../../modules/registration/types';
import { UserDto } from '../../modules/user/types';
import { AuthModel } from '../../store';
import LoginFields from '../Header/components/LoginFields/LoginFields';
import UserAvatarIcon from '../UserPage/UserAvatarIcon';
import RegistrationFields from './Registration/components/RegistrationFields';

const { $itemStore: $loginStore, resetOne } = AuthModel;

interface Props {
  isVisible: boolean;
  setIsVisible: TVoidFn<boolean>;
  RegistrationForm: any;
  isRegistration: boolean;
  setIsRegistration: TVoidFn<boolean>;
  registration: TCreateItemFx<
    Partial<RegistrationDto>,
    TItemWithUuid<RegistrationDto>
  >;
  login: TCreateItemFx<Partial<LoginDto>, TTokens>;
  LoginForm: any;
  user: Nullable<UserDto>;
  onLogin: TPromiseFn;
}

function LoginPage({
  isVisible,
  setIsVisible,
  RegistrationForm,
  isRegistration,
  setIsRegistration,
  registration,
  login,
  LoginForm,
  user,
  onLogin,
}: Props) {
  const { error } = useStore($loginStore);
  const loginError = error?.statusCode === 401 ? 'Неверный пароль' : '';
  useEffect(() => {
    resetOne();
  }, [isVisible]);

  const formComponent = isRegistration ? (
    <RegistrationForm
      modalVisible={isVisible}
      setModalVisible={setIsVisible}
      pending={false}
      onCreate={registration}
      buttonClassName="header-nav-item-link__login"
      buttonText=""
      title="Зарегистрироваться"
    >
      <RegistrationFields />
    </RegistrationForm>
  ) : (
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
        setIsRegistration={setIsRegistration}
        loginError={loginError}
      />
    </LoginForm>
  );
  return <div>{user ? <UserAvatarIcon user={user} /> : formComponent}</div>;
}

export default memo(LoginPage);

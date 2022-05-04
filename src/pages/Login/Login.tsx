import React from 'react';
import { TCreateItemFx } from '../../common/models/abstractModel/abstractCrudModel';
import { TItemWithUuid, TVoidFn } from '../../common/types';
import { Nullable } from '../../core/types';
import { LoginDto, TTokens } from '../../modules/login/types';
import { RegistrationDto } from '../../modules/registration/types';
import { UserDto } from '../../modules/user/types';
import LoginFields from '../Header/components/LoginFields/LoginFields';
import UserAvatarIcon from '../UserPage/UserAvatarIcon';
import RegistrationFields from './Registration/components/RegistrationFields';

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
  afterLogin: TVoidFn<TTokens>;
  user: Nullable<UserDto>;
}

export function LoginPage({
  isVisible,
  setIsVisible,
  RegistrationForm,
  isRegistration,
  setIsRegistration,
  registration,
  login,
  LoginForm,
  afterLogin,
  user,
}: Props) {
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
      afterCreate={afterLogin}
      buttonClassName="header-nav-item-link__login"
      buttonText="Войти"
      title="Войти"
    >
      <LoginFields setIsRegistration={setIsRegistration} />
    </LoginForm>
  );
  return <div>{user ? <UserAvatarIcon user={user} /> : formComponent}</div>;
}

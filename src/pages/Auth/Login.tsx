import { useStore } from 'effector-react';
import React, { memo, useEffect } from 'react';
import { TItemStore } from '../../common/api/types';
import { TModalWithFormProps } from '../../common/form/types';
import { TCreateItemFx } from '../../common/models/abstractModel/abstractCrudModel';
import { TItemWithUuid, TPromiseFn, TVoidFn } from '../../common/types';
import { HttpStatus } from '../../common/utils/constants';
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
  RegistrationForm: React.FC<
    TModalWithFormProps<TItemWithUuid<RegistrationDto>, RegistrationDto>
  >;
  isRegistration: boolean;
  setIsRegistration: TVoidFn<boolean>;
  registration: TCreateItemFx<
    Partial<RegistrationDto>,
    TItemWithUuid<RegistrationDto>
  >;
  login: TCreateItemFx<Partial<LoginDto>, TTokens>;
  LoginForm: React.FC<TModalWithFormProps<TItemWithUuid<LoginDto>, TTokens>>;
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
  const loginError =
    error?.statusCode === HttpStatus.UNAUTHORIZED ? 'Неверный пароль' : '';
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

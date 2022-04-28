import React, { useEffect, useState } from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { uuid } from '../../common/utils/utils';
import { LoginDto, TTokens } from '../../modules/login/types';
import { RegistrationDto } from '../../modules/registration/types';
import { AuthModel, RegistrationModel } from '../../store';
import LoginFields from '../Header/components/LoginFields/LoginFields';
import { onSuccessLogin } from './model/store';
import RegistrationFields from './Registration/components/RegistrationFields';

const { createNewItemFx: login } = AuthModel;
const { createNewItemFx: registration } = RegistrationModel;

export function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);
  const { ModalForm: LoginForm } = useValidatedForm<LoginDto, TTokens>({
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

  const afterCreate = (v: TTokens) => {
    onSuccessLogin(v);
    return Promise.resolve();
  };

  return (
    <div>
      {isRegistration ? (
        <RegistrationForm
          modalVisible={isVisible}
          setModalVisible={setIsVisible}
          pending={false}
          onCreate={registration}
          buttonClassName="header-nav-item-link__login"
          buttonText="Войти"
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
          afterCreate={afterCreate}
          buttonClassName="header-nav-item-link__login"
          buttonText="Войти"
          title="Войти"
        >
          <LoginFields setIsRegistration={setIsRegistration} />
        </LoginForm>
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { uuid } from '../../common/utils/utils';
import { LoginDto } from '../../modules/login/types';
import LoginFields from '../Header/components/LoginFields/LoginFields';
import { loginFx } from './model/store';
import RegistrationFields from './Registration/components/RegistrationFields';

export function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);
  const { ModalForm } = useValidatedForm<LoginDto>({ uuid: uuid() });

  useEffect(() => {
    if (!isVisible) {
      setIsRegistration(false);
    }
  }, [setIsRegistration, isVisible]);

  return (
    <ModalForm
      modalVisible={isVisible}
      setModalVisible={setIsVisible}
      pending={false}
      onCreate={loginFx}
      buttonClassName="header-nav-item-link__login"
      buttonText="Войти"
      title={isRegistration ? 'Зарегистрироваться' : 'Войти'}
    >
      {isRegistration ? (
        <RegistrationFields />
      ) : (
        <LoginFields setIsRegistration={setIsRegistration} />
      )}
    </ModalForm>
  );
}

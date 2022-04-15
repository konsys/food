import { useStore } from 'effector-react';
import React, { useState } from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { LoginDto } from '../../modules/login/types';
import { LoginModel } from '../../store';
import LoginFields from '../Header/components/LoginFields/LoginFields';
import { $user } from '../User/model/store';

const { createItemFx } = LoginModel;

export function LoginPage() {
  const user = useStore($user);
  const [isVisible, setIsVisible] = useState(false);
  const { ModalForm } = useValidatedForm<LoginDto>();
  return (
    <ModalForm
      modalVisible={isVisible}
      setModalVisible={setIsVisible}
      pending={false}
      onCreate={createItemFx}
      buttonClassName="header-nav-item-link__login"
      buttonText="Войти"
      title="Войти"
    >
      {JSON.stringify(user)}
      <LoginFields />
    </ModalForm>
  );
}

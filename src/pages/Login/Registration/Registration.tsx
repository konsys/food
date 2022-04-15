import React, { memo, useState } from 'react';
import { useValidatedForm } from '../../../common/form/useValidatedForm';
import { RegistrationModel } from '../../../store';
import RegistrationFields from './components/RegistrationFields';

const { createItemFx } = RegistrationModel;

function Registration() {
  const [isVisible, setIsVisible] = useState(true);
  const { ModalForm } = useValidatedForm<any>();

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
      <RegistrationFields />
    </ModalForm>
  );
}

export default memo(Registration);

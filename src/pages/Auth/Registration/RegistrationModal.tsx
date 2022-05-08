import React, { memo, Props, useState } from 'react';
import { useValidatedForm } from '../../../common/form/useValidatedForm';
import { uuid } from '../../../common/utils/utils';
import { RegistrationDto } from '../../../modules/registration/types';
import { RegistrationModel } from '../../../store';
import RegistrationFields from './components/RegistrationFields';

const { createNewItemFx: registration } = RegistrationModel;

function RegistrationModal() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    ModalForm: RegistrationForm,
    formInstance: registrationFormInstance,
  } = useValidatedForm<RegistrationDto>({
    uuid: uuid(),
  });
  return (
    <RegistrationForm
      modalVisible={isVisible}
      setModalVisible={setIsVisible}
      pending={false}
      onCreate={registration}
      buttonClassName="header-nav-item-link__login"
      buttonText=""
      title="Зарегистрироваться"
    >
      <RegistrationFields registrationFormInstance={registrationFormInstance} />
    </RegistrationForm>
  );
}

export default memo(RegistrationModal);

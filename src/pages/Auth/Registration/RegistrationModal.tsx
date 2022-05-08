import React, { memo } from 'react';
import { useValidatedForm } from '../../../common/form/useValidatedForm';
import { TVoidFn } from '../../../common/types';
import { uuid } from '../../../common/utils/utils';
import { RegistrationDto } from '../../../modules/registration/types';
import { RegistrationModel } from '../../../store';
import RegistrationFields from './components/RegistrationFields';

const { createNewItemFx: registration } = RegistrationModel;

interface Props {
  isVisible: boolean;
  setIsVisible: TVoidFn<boolean>;
}

function RegistrationModal({ isVisible, setIsVisible }: Props) {
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
    >
      <RegistrationFields registrationFormInstance={registrationFormInstance} />
    </RegistrationForm>
  );
}

export default memo(RegistrationModal);

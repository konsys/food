import React, { FC } from 'react';
import { Form, FormProps } from 'antd';

export interface AbstractFormProps extends FormProps {
  isEdit?: boolean;
}

export const AbstractForm: FC<AbstractFormProps> = (props) => {
  const {
    labelAlign = 'left',
    colon = false,
    isEdit,
    requiredMark = isEdit,
    ...otherProps
  } = props;

  return <Form {...otherProps} labelAlign={labelAlign} colon={colon} requiredMark={requiredMark} />;
};

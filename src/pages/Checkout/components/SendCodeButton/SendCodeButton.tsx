import { Button, ButtonProps, Form } from 'antd';
import React, { memo, MouseEventHandler } from 'react';

const { Item } = Form;

interface Props extends ButtonProps {
  createCodeSms: MouseEventHandler<HTMLElement>;
}

function SendCodeButton(props: Props) {
  const { createCodeSms, ...restProps } = props;

  return (
    <Button
      {...restProps}
      type="primary"
      className="order-form-send-code"
      onClick={createCodeSms}
    >
      Получить код
    </Button>
  );
}

export default memo(SendCodeButton);

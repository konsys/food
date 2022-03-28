import { Button, ButtonProps, Form } from 'antd';
import React, { memo, MouseEventHandler } from 'react';

const { Item } = Form;

interface Props extends ButtonProps {
  loading: boolean;
  createCodeSms: MouseEventHandler<HTMLElement>;
}

function SendCodeButton(props: Props) {
  const { loading, createCodeSms, ...restProps } = props;

  return (
    <div>
      <label>&nbsp;</label>
      <Item>
        <Button
          {...restProps}
          type='primary'
          className='order-form-send-code'
          loading={loading}
          onClick={createCodeSms}
        >
          Получить код
        </Button>
      </Item>
    </div>
  );
}

export default memo(SendCodeButton);

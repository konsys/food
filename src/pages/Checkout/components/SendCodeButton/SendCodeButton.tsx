import { Button, ButtonProps, Form } from 'antd';
import React, { memo, MouseEventHandler } from 'react';

const { Item } = Form;

interface Props extends ButtonProps {
  loading: boolean;
  sendCode: MouseEventHandler<HTMLElement>;
}

function SendCodeButton(props: Props) {
  const { loading, sendCode, ...restProps } = props;

  return (
    <div className='check-oh-hidden'>
      <label>&nbsp;</label>
      <Item>
        <Button
          {...restProps}
          type='primary'
          className='order-form-send-code'
          loading={loading}
          onClick={sendCode}
        >
          Получить код
        </Button>
      </Item>
    </div>
  );
}

export default memo(SendCodeButton);

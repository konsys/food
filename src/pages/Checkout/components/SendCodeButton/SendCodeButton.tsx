import { Button, Form } from 'antd';
import React, { memo, MouseEventHandler } from 'react';

const { Item } = Form;

interface Props {
  loading: boolean;
  sendCode: MouseEventHandler<HTMLElement>;
  isRunning: boolean;
}

function SendCodeButton(props: Props) {
  const { loading, isRunning, sendCode } = props;

  return (
    <div className='check-oh-hidden'>
      <label>&nbsp;</label>
      <Item>
        <Button
          type='primary'
          className='order-form-send-code'
          loading={loading}
          onClick={sendCode}
          disabled={isRunning}
        >
          Получить код
        </Button>
      </Item>
    </div>
  );
}

export default memo(SendCodeButton);

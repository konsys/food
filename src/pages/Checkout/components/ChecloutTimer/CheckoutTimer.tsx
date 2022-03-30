import { Row, Col } from 'antd';
import React, { memo } from 'react';

import './checkoutTimer.less';

interface Props {
  minutes: number;
  seconds: number;
  isRunning: boolean;
}

function CheckoutTimer(props: Props) {
  const { minutes, seconds, isRunning } = props;
  return (
    <div>
      {isRunning ? (
        <Row className='ordering-form__phone-info' gutter={8}>
          <Col className='ordering-form__resend-code-info'> Отправить код повторно можно через</Col>
          <Col>
            <span className='code_mins'>{minutes}</span>
            <span>:</span>
            <span className='code_mins'>{seconds < 10 ? `0${seconds}` : seconds}</span>
          </Col>
        </Row>
      ) : (
        ''
      )}
    </div>
  );
}

export default memo(CheckoutTimer);

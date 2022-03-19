import React, { memo } from 'react';

interface Props {
  minutes: number;
  seconds: number;
  isRunning: boolean;
}

function CheckoutTimer(props: Props) {
  const { minutes, seconds, isRunning } = props;

  return (
    <div className='ordering-form__phone-info'>
      {isRunning ? (
        <>
          Вы сможете отправить код еще раз через
          <span className='code_mins'>{minutes}</span>
          <span>:</span>
          <span className='code_secs'>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default memo(CheckoutTimer);

import React, { memo } from 'react';
import { useTimer } from 'react-timer-hook';

interface Props {
  expiryTimestamp: Date;
}

function ChecloutTimer(props: Props) {
  const { expiryTimestamp } = props;

  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => alert('onExpire called'),
  });

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

export default memo(ChecloutTimer);

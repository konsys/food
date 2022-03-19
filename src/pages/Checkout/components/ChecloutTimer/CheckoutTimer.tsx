import moment from 'moment';
import React, { memo } from 'react';
import { useTimer } from 'react-timer-hook';

interface Props {
  expiryTimestamp: Date;
}

function ChecloutTimer(props: Props) {
  const { expiryTimestamp } = props;
  const testDateUtc = moment.utc(expiryTimestamp);
  const localTime = moment(testDateUtc).local().toDate();

  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp: new Date(expiryTimestamp),
    onExpire: () => console.log('onExpire called'),
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
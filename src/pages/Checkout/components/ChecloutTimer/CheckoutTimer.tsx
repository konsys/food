import moment from 'moment';
import React, { memo, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { DATE_FORMAT } from '../../../../common/constants/constants';

interface Props {
  expiryTimestamp: Date;
}

function ChecloutTimer(props: Props) {
  const { expiryTimestamp } = props;

  const { seconds, minutes, isRunning, restart } = useTimer({
    expiryTimestamp: new Date(),
    onExpire: () => console.log('onExpire called'),
  });

  useEffect(() => {
    const localTime = moment(expiryTimestamp).local().toDate();
    restart(localTime);
  }, [expiryTimestamp]);

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

import { Tooltip } from 'antd';
import React, { memo } from 'react';
import { DeliveryRangeDto } from '../../../types/dto';

const longRangeText = (
  minutes: number
) => ` Ваш заказ будет доставлен курьерами. Ресторан находится далеко от вашего адреса, поэтому
доставка может занять более ${minutes} минут.`;
const standardRangeText = (minutes: number) =>
  `Ваш заказ будет доставлен курьерами в течение ${minutes} минут.`;

interface Props {
  deliveryPrice: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  range: DeliveryRangeDto;
}

function DeliveryRange(props: Props) {
  const { deliveryPrice, minDeliveryTime, maxDeliveryTime, range } = props;

  let rangeText = range === DeliveryRangeDto.LONG && 'Дальняя доставка';
  rangeText = range === DeliveryRangeDto.HIGHT_DEMAND && 'Экспресс доставка';
  rangeText = range === DeliveryRangeDto.STANDARD && 'Стандартная доставка';

  return (
    <Tooltip
      placement='topLeft'
      title={`${range === DeliveryRangeDto.LONG ? longRangeText : standardRangeText}`}
    >
      <span>
        {minDeliveryTime}-{maxDeliveryTime} мин&nbsp;•&nbsp;{deliveryPrice} ₽&nbsp;
      </span>
      <span className='tooltip-information'>
        <svg
          width={17}
          height={17}
          viewBox='0 0 17 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.43945 13H7.74023V6.66016H9.43945V13ZM7.64062 5.01953C7.64062 4.76562 7.72461 4.55664 7.89258 4.39258C8.06445 4.22852 8.29688 4.14648 8.58984 4.14648C8.87891 4.14648 9.10938 4.22852 9.28125 4.39258C9.45312 4.55664 9.53906 4.76562 9.53906 5.01953C9.53906 5.27734 9.45117 5.48828 9.27539 5.65234C9.10352 5.81641 8.875 5.89844 8.58984 5.89844C8.30469 5.89844 8.07422 5.81641 7.89844 5.65234C7.72656 5.48828 7.64062 5.27734 7.64062 5.01953Z'
            fill='white'
          />
          <circle cx='8.5' cy='8.5' r='7.75' stroke='white' strokeWidth='1.5' />
        </svg>
      </span>
      <br />
      <span>{rangeText}</span>
    </Tooltip>
  );
}

export default memo(DeliveryRange);

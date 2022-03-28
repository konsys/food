import { Tooltip } from 'antd';
import React, { memo } from 'react';
import { DeliveryRangeDto } from '../../../../modules/delivery/types';

import './deliveryRange.less';

const longRangeText = (
  minutes: number
) => ` Ваш заказ будет доставлен курьерами. Ресторан находится далеко от вашего адреса, поэтому
доставка может занять более ${minutes} минут.`;
const standardRangeText = (minutes: number) =>
  `Ваш заказ будет доставлен курьерами в течение ${minutes} минут.`;

interface Props {
  deliveryPrice: number;
  minDeliveryMinutes: number;
  maxDeliveryMinutes: number;
  range: DeliveryRangeDto;
}

function DeliveryRange(props: Props) {
  const { deliveryPrice, minDeliveryMinutes, maxDeliveryMinutes, range } = props;

  let rangeText = range === DeliveryRangeDto.LONG && 'Дальняя доставка';
  rangeText = range === DeliveryRangeDto.HIGHT_DEMAND && 'Экспресс доставка';
  rangeText = range === DeliveryRangeDto.STANDARD && 'Стандартная доставка';

  return (
    <Tooltip
      placement='topLeft'
      title={`${
        range === DeliveryRangeDto.LONG
          ? longRangeText(maxDeliveryMinutes)
          : standardRangeText(maxDeliveryMinutes)
      }`}
    >
      <div className='restaurant-info__delivery d-flex'>
        <div className='restaurant-info__delivery-icon delivery_type--default'>
          <img
            src='/img/icons/delivery/default.svg'
            alt='Доставка от Broniboy'
          />
        </div>
        <div className='restaurant-info__delivery-info '>
          <span>
            {minDeliveryMinutes}-{maxDeliveryMinutes} мин&nbsp;•&nbsp;{deliveryPrice} ₽&nbsp;
          </span>

          <br />
          <span>Доставка от Broniboy</span>
        </div>
      </div>
    </Tooltip>
  );
}

export default memo(DeliveryRange);

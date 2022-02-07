import React, { memo } from 'react';
import { RatingDto } from '../../../types/dto';

interface Props {
  rating: RatingDto;
}

function RatingComponent(props: Props) {
  const { rating } = props;
  const color = rating >= 4 ? '#76C032' : 'yellow';
  return (
    <>
      <strong style={{ color }}>{rating}&nbsp;</strong>
      <svg
        width={38}
        height={37}
        viewBox='0 0 38 37'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18.0489 0.927049C18.3483 0.00573802 19.6517 0.00574017 19.9511 0.927051L23.7148 12.5106C23.8487 12.9227 24.2326 13.2016 24.6659 13.2016H36.8456C37.8143 13.2016 38.2171 14.4412 37.4333 15.0106L27.5798 22.1697C27.2293 22.4243 27.0826 22.8757 27.2165 23.2877L30.9802 34.8713C31.2796 35.7926 30.2251 36.5588 29.4414 35.9894L19.5878 28.8303C19.2373 28.5757 18.7627 28.5757 18.4122 28.8303L8.55862 35.9894C7.77491 36.5588 6.72043 35.7926 7.01978 34.8713L10.7835 23.2877C10.9174 22.8757 10.7707 22.4243 10.4202 22.1697L0.566653 15.0106C-0.217061 14.4412 0.185717 13.2016 1.15444 13.2016H13.3342C13.7674 13.2016 14.1513 12.9227 14.2852 12.5106L18.0489 0.927049Z'
          fill={color}
        />
      </svg>
    </>
  );
}

export default memo(RatingComponent);

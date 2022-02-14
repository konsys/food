import React, { memo } from 'react';
import { RatingDto } from '../../../types/dto';
import { ReactComponent as StarIcon } from '../../../../svg/star.svg';

interface Props {
  rating: RatingDto;
}

function RatingComponent(props: Props) {
  const { rating } = props;
  const color = rating >= 4 ? '#76C032' : 'yellow';
  return (
    <>
      <div>
        <strong style={{ color }}>{rating}.0&nbsp;</strong>
      </div>
      <div>
        <StarIcon style={{ fill: color }} />
      </div>
    </>
  );
}

export default memo(RatingComponent);

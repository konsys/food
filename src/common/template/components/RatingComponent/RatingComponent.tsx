import React, { memo } from 'react';
import { RatingDto } from '../../../modules/rating/types';
import { ReactComponent as StarIcon } from '../../../../svg/star.svg';

import './ratingComponent.less';

interface Props {
  rating: RatingDto;
}

function RatingComponent(props: Props) {
  const { rating } = props;
  const color = rating >= 4 ? '#76C032' : 'yellow';
  return (
    <div className="restaurant-descr__header--rating d-flex">
      <div>
        <strong style={{ color }}>{rating}.0&nbsp;</strong>
      </div>
      <div>
        <StarIcon style={{ fill: color }} />
      </div>
    </div>
  );
}

export default memo(RatingComponent);

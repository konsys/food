import React, { memo } from 'react';
import { RatingDto } from '../../../modules/rating/types';

interface Props {
  rating: RatingDto;
}

function PriceRatingComponent(props: Props) {
  const { rating } = props;
  return <span>{Array(rating).fill('₽')}</span>;
}

export default memo(PriceRatingComponent);

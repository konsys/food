import React, { memo } from 'react';
import { RatingDto } from '../../../types/dto';

interface Props {
  rating: RatingDto;
}

function PriceRatingComponent(props: Props) {
  const { rating } = props;
  return <span>{Array(rating).fill('₽')}</span>;
}

export default memo(PriceRatingComponent);

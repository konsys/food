import React, { memo } from 'react';

interface Props {
  ratingValue?: number;
  ratingCount?: number;
  bestRating?: number;
  worstRating?: number;
}

function MetaRatingItem(props: Props) {
  const { worstRating = 0, bestRating = 5, ratingCount = 4, ratingValue = 5 } = props;

  return (
    <div itemProp='aggregateRating' itemScope itemType='https://schema.org/AggregateRating'>
      <meta itemProp='ratingValue' content={ratingValue.toString()} />
      <meta itemProp='ratingCount' content={ratingCount.toString()} />
      <meta itemProp='bestRating' content={bestRating.toString()} />
      <meta itemProp='worstRating' content={worstRating.toString()} />
    </div>
  );
}

export default memo(MetaRatingItem);

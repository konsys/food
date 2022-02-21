import { RatingDto } from '../../modules/rating/types';

export const getRatingColor = (rating: RatingDto) => {
  if (rating === 1) {
    return '#e70f0f';
  }
  if (rating === 2) {
    return 'yellow';
  }
  if (rating === 3) {
    return 'yellow';
  }
  if (rating === 4) {
    return '#76C032';
  }
  if (rating === 5) {
    return '#76C032';
  }
};

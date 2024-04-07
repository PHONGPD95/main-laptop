// styling
import styled from 'styled-components';

// components
import Rating from '@mui/material/Rating';
import { ReactComponent as StarFilled } from '@/public/assets/icons/star-solid.svg';
import { ReactComponent as StarEmpty } from '@/public/assets/icons/star-regular.svg';

// utils
import PropTypes from 'prop-types';

const StyledRating = styled(Rating)`
  gap: 15px;

  .MuiRating-iconFilled,
  .MuiRating-iconEmpty {
    background: transparent;
    width: 18px;
    height: 18px;
    color: var(--yellow);
  }
`;

interface Props {
  rating?: number,
  readOnly?: boolean,
};

const RatingStars = ({ rating = 0, readOnly = true, ...props }: Props) => {
  return (
    <StyledRating
      readOnly={readOnly}
      value={rating}
      precision={0.5}
      emptyIcon={<StarEmpty />}
      icon={<StarFilled />}
      {...props}
    />
  );
};



export default RatingStars;

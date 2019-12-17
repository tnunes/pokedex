import PropTypes from 'prop-types';

import { gteMedium } from '../theme/medias';

import FavouriteIcon from './FavouriteIcon';

const FavouriteButton = ({ filled, className, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    <FavouriteIcon filled={filled} />
    <style jsx>{`
      button {
        height: 0.9rem;
        padding: 0;
        border: none;
        font-size: 0.9rem;
        line-height: 1;
        background-color: transparent;
      }

      @media (${gteMedium}) {
        button {
          height: 1.4rem;
          font-size: 1.4rem;
        }
      }
    `}</style>
  </button>
);

FavouriteButton.propTypes = {
  filled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default FavouriteButton;

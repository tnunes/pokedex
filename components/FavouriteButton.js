import PropTypes from 'prop-types';

import FavouriteIcon from './FavouriteIcon';

const FavouriteButton = ({ filled, className, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    <FavouriteIcon filled={filled} />
    <style jsx>{`
      button {
        padding: 0;
        border: none;
        background-color: transparent;
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

import PropTypes from 'prop-types';

import { gteMedium } from '../theme/medias';

const FavouriteIcon = ({ filled, ...props }) => (
  <svg role="img" viewBox="0 0 14 11" {...props}>
    <title>Favourite Heart</title>
    <path
      fill={filled ? '#0C6B58' : 'transparent'}
      stroke="#0C6B58"
      d="M10.77 1.085c1.05.246 1.87 1 2.138 1.965.268.966-.058 1.988-.851 2.668L7.7 9.73A1.033 1.033 0 017 10c-.263 0-.516-.097-.701-.269L1.943 5.718c-.793-.68-1.119-1.702-.85-2.668.267-.965 1.087-1.719 2.137-1.965 1.05-.247 2.162.053 2.9.782l.87.8.87-.8c.738-.729 1.85-1.029 2.9-.782z"
    />
    <style jsx>{`
      svg {
        width: 1.2rem;
        height: 0.9rem;
      }

      path {
        transition: fill 0.3s ease;
      }

      @media (${gteMedium}) {
        svg {
          width: 1.7rem;
          height: 1.4rem;
        }
      }
    `}</style>
  </svg>
);

FavouriteIcon.propTypes = {
  filled: PropTypes.bool
};

export default FavouriteIcon;

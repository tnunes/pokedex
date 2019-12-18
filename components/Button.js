import PropTypes from 'prop-types';

import { gteMedium } from '../theme/medias';

const Button = ({ className, children, onClick, type = 'button' }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
    <style jsx>{`
      button {
        padding: 0.7rem 3.3rem;
        border: none;
        border-radius: 0.4rem;
        font-size: 1.2rem;
        line-height: 1.25;
        letter-spacing: 0.024rem;
        background-color: var(--greyish-blue);
        color: var(--white);
        cursor: pointer;
      }

      @media (${gteMedium}) {
        button {
          padding: 0.9rem 4.6rem;
          font-size: 1.4rem;
          line-height: 1.2143;
          letter-spacing: 0.028rem;
        }
      }
    `}</style>
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button;

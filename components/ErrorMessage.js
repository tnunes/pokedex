import PropTypes from 'prop-types';

import { ltMedium } from '../theme/medias';

import ExclamationIcon from './ExclamationIcon';

const ErrorMessage = props => (
  <div>
    <ExclamationIcon className="errorIcon" /> <span>{props.message}</span>
    <style jsx>{`
      div {
        display: inline-flex;
        color: var(--brick);
        line-height: 1.5;
      }

      div > :global(.errorIcon) {
        flex-shrink: 0;
      }

      span {
        margin: 0 1rem;
      }

      @media (${ltMedium}) {
        div {
          font-size: 1.4rem;
        }
      }
    `}</style>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string
};

export default ErrorMessage;

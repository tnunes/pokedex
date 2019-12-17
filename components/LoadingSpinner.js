import PokeballIcon from './PokeballIcon';

const LoadingSpinner = () => (
  <div>
    <PokeballIcon className="spinningPokeball" />
    <span>Throwing pokeball...</span>

    <style jsx>{`
      div {
        display: inline-flex;
        color: var(--dark-blue-green);
        animation: 2.5s infinite blink;
      }

      div > :global(.spinningPokeball) {
        margin-right: 1rem;
        animation: 1s infinite spin ease-out;
      }

      @keyframes spin {
        0 {
          transform: rotate(0);
        }

        50% {
          transform: rotate(270deg);
        }

        75% {
          transform: rotate(180deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes blink {
        0 {
          opacity: 1;
        }

        50% {
          opacity: 0.4;
        }

        75% {
          opacity: 0.8;
        }

        100% {
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;

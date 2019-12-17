import PropTypes from 'prop-types';

import { gteMedium } from '../theme/medias';

import PokemonCard from './PokemonCard';

const PokemonsGrid = ({ pokemons }) => {
  return (
    <ul>
      {pokemons.map(pokemon => (
        <li key={pokemon.name}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}

      <style jsx>{`
        :global(:root) {
          --card-width: 14rem;
        }

        ul {
          margin: 0 1.5rem;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, var(--card-width));
          grid-gap: 2.5rem 1rem;
          justify-content: center;
        }

        li {
          list-style-type: none;
        }

        @media (${gteMedium}) {
          :global(:root) {
            --card-width: 20rem;
          }

          ul {
            margin: 0 4rem;
            grid-gap: 5rem 4rem;
            grid-template-columns: repeat(3, var(--card-width));
          }
        }
      `}</style>
    </ul>
  );
};

PokemonsGrid.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
  )
};

export default PokemonsGrid;

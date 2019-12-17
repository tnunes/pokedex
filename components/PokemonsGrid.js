import PropTypes from 'prop-types';

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
        ul {
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 14rem 14rem;
          grid-gap: 2.5rem 1rem;
        }

        li {
          list-style-type: none;
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

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import FavouriteButton from './FavouriteButton';

const PokemonTypes = ({ types = [] }) => {
  const sortedTypeNames = types
    .slice()
    .sort((a, b) => a.slot - b.slot)
    .map(({ type }) => type.name);

  return (
    <ul>
      {sortedTypeNames.map(type => (
        <li key={type} style={{ backgroundColor: typeColor(type) }}>
          {type}
        </li>
      ))}
      <style jsx>{`
        ul {
          margin: 0 1.2rem;
          padding: 0;
          display: flex;
          justify-content: space-between;
          text-align: center;
        }

        li {
          width: 5.4rem;
          padding: 0.3rem 0;
          border-radius: 0.4rem;
          list-style-type: none;
          font-size: 0.8rem;
          line-height: 1.25;
          letter-spacing: 0.016rem;
          text-transform: uppercase;
          color: var(--white);
          opacity: 0.8;
        }
      `}</style>
    </ul>
  );
};

PokemonTypes.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      slot: PropTypes.number,
      type: PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
    })
  )
};

function typeColor(type) {
  switch (type) {
    case 'grass':
      return 'var(--sap-green)';
    case 'poison':
      return 'var(--light-purple)';
    case 'fire':
      return 'var(--brick)';
    case 'water':
      return 'var(--dark-sky-blue)';
    case 'flying':
      return 'var(--royal)';
    case 'electric':
      return 'var(--macaroni-and-cheese)';
    case 'bug':
      return 'var(--green-leaf)';
    case 'normal':
      return 'var(--metallic-blue)';
    case 'ground':
      return 'var(--deep-bronze)';
    case 'fairy':
      return 'var(--cerise)';
    case 'fighting':
      return 'var(--mosque)';
    case 'psychic':
      return 'var(--medium-purple)';
    case 'steel':
      return 'var(--gray)';
    case 'ghost':
      return 'var(--studio)';
    case 'ice':
      return 'var(--malibu)';
    case 'rock':
      return 'var(--silver-chalice)';
    case 'dragon':
      return 'var(--madras)';
    case 'dark':
      return 'var(--mine-shaft)';
    case 'shadow':
      return 'var(--emperor)';
    case 'unknown':
    default:
      return 'var(--black)';
  }
}

function pokemonNumber(pokemonId) {
  let pokemonNumber = `${pokemonId}`;

  while (pokemonNumber.length < 3) {
    pokemonNumber = `0${pokemonNumber}`;
  }

  return pokemonNumber;
}

function pokemonImage(pokemonNumber) {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonNumber}.png`;
}

const PokemonCard = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    async function fetchPokemonDetails(url) {
      const response = await fetch(url).then(res => res.json());

      console.log(`🐞 Fetched Pokemon details for ${pokemon.name}`, response);

      setPokemonDetails(response);
    }

    fetchPokemonDetails(pokemon.url);
  }, [pokemon.name, pokemon.url]);

  const { name, id, types } = pokemonDetails;
  const number = pokemonNumber(id);

  return (
    <article>
      <img
        className="pokemonPicture"
        src={pokemonImage(number)}
        alt={pokemon.name}
      />
      <FavouriteButton className="favouriteButton" />
      <div className="pokemonIdentication">
        <h2 className="pokemonName">{name}</h2>
        <span className="pokemonNumber">#{number}</span>
      </div>
      <PokemonTypes types={types} />

      <style jsx>{`
        article {
          --image-size: 14rem;

          position: relative;
          width: 14rem;
          display: flex;
          flex-direction: column;
        }

        .pokemonPicture {
          width: var(--image-size);
          height: var(--image-size);
          padding: 1.5rem;
          border: 0.1rem solid var(--light-sky-blue);
          border-radius: 1.8rem;
          background-color: var(--white);
        }

        article > :global(.favouriteButton) {
          position: absolute;
          top: 1.4rem;
          right: 1.4rem;
        }

        .pokemonIdentication {
          margin: 0 1.2rem;
          display: flex;
          justify-content: space-between;
        }

        .pokemonName {
          margin: 1rem 0 0.6rem;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 1.2142;
          text-transform: capitalize;
          color: var(--dark-slate-blue);
        }

        .pokemonNumber {
          margin: 1.2rem 0.1rem 0 0;
          font-weight: 300;
          font-size: 1.1rem;
          font-style: italic;
          color: var(--greyish-blue);
        }
      `}</style>
    </article>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
};

export default PokemonCard;

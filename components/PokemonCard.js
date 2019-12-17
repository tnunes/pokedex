import PropTypes from 'prop-types';
import { useState } from 'react';

import { gteMedium } from '../theme/medias';
import pokemonTypeColor from '../theme/pokemonTypeColor';
import usePokemonDetails from '../hooks/usePokemonDetails';

import FavouriteButton from './FavouriteButton';
import CardSkeleton from './CardSkeleton';
import CardImageSkeleton from './CardImageSkeleton';
import ImageLoader from './ImageLoader';

const PokemonTypes = ({ types = [] }) => {
  const sortedTypeNames = types
    .slice()
    .sort((a, b) => a.slot - b.slot)
    .map(({ type }) => type.name);

  return (
    <ul>
      {sortedTypeNames.map(type => (
        <li key={type} style={{ backgroundColor: pokemonTypeColor(type) }}>
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

        @media (${gteMedium}) {
          ul {
            margin: 0 1.8rem;
          }

          li {
            width: 7.7rem;
            padding: 0.5rem 0;
            font-size: 1rem;
            line-height: 1.2;
            letter-spacing: 0.02rem;
          }
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

const PokemonCard = ({ pokemon, skeletonOnly }) => {
  const {
    pokemon: pokemonDetails,
    isLoading,
    error
  } = usePokemonDetails(pokemon.name, { doNotFetch: skeletonOnly });
  const [hasImageLoadingError, setHasImageLoadingError] = useState(false);

  const { name, id, types } = pokemonDetails || {};
  const number = pokemonNumber(id);

  return (
    <article>
      {error ? (
        <>
          <div className="pokemonPictureWrapper loadingError" />
          <div className="pokemonIdentication">
            <h2 className="pokemonName">{pokemon.name}</h2>
          </div>
          <div className="errorMessage">Could not load details</div>
        </>
      ) : isLoading || !pokemonDetails || skeletonOnly ? (
        <CardSkeleton />
      ) : (
        <>
          {hasImageLoadingError ? (
            <div className="pokemonPictureWrapper loadingError" />
          ) : (
            <div className="pokemonPictureWrapper">
              <ImageLoader
                src={pokemonImage(number)}
                alt={pokemon.name}
                skeleton={
                  <CardImageSkeleton className="pokemonPictureSkeleton" />
                }
                onError={() => setHasImageLoadingError(true)}
                className="pokemonPicture"
              />
            </div>
          )}
          <FavouriteButton className="favouriteButton" />
          <div className="pokemonIdentication">
            <h2 className="pokemonName">{name}</h2>
            <span className="pokemonNumber">#{number}</span>
          </div>
          <PokemonTypes types={types} />
        </>
      )}

      <style jsx>{`
        article {
          position: relative;
          width: var(--card-width);
          display: flex;
          flex-direction: column;
        }

        .pokemonPictureWrapper {
          position: relative;
          width: var(--card-width);
          height: var(--card-width);
          padding: 1.5rem;
          border: 0.1rem solid var(--light-sky-blue);
          border-radius: 1.8rem;
          background-color: var(--white);
        }

        .pokemonPictureWrapper > :global(.pokemonPicture) {
          width: 100%;
          height: 100%;
        }

        .pokemonPictureWrapper > :global(.pokemonPictureSkeleton) {
          position: absolute;
          top: 0;
          left: 0;
        }

        article > :global(.favouriteButton) {
          position: absolute;
          top: 1.4rem;
          right: 1.4rem;
        }

        @media (hover: hover) {
          :global(.favouriteButton) {
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          article:hover > :global(.favouriteButton) {
            opacity: 1;
            cursor: pointer;
          }
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

        .loadingError {
          border-color: var(--brick);
          opacity: 0.4;
        }

        .loadingError::before {
          content: 'X';
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--brick);
        }

        .errorMessage {
          margin: 0.1rem 1.2rem 0;
          font-size: 1.2rem;
          color: var(--brick);
        }

        @media (${gteMedium}) {
          .pokemonPictureWrapper {
            padding: 0;
          }

          article > :global(.favouriteButton) {
            top: 1.8rem;
            right: 1.8rem;
          }

          .pokemonIdentication {
            margin: 0 1.8rem;
          }

          .pokemonName {
            margin-bottom: 0.9rem;
            font-size: 2.1rem;
            line-height: 1.1905;
          }

          .pokemonNumber {
            margin-top: 1.5rem;
            font-size: 1.6rem;
          }

          .errorMessage {
            margin: 0.3rem 1.8rem 0;
            font-size: 1.4rem;
          }
        }
      `}</style>
    </article>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({ name: PropTypes.string, url: PropTypes.string }),
  skeletonOnly: PropTypes.bool
};

export default PokemonCard;

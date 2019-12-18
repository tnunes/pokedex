import Link from 'next/link';

import useFavourites from '../hooks/useFavourites';
import { makeSkeletons } from '../services/skeletons';

import MainLayout from '../components/MainLayout';
import ErrorMessage from '../components/ErrorMessage';
import PokemonsGrid from '../components/PokemonsGrid';

import { gteMedium } from '../theme/medias';

const isServer = typeof window === 'undefined';

const SERVER_SIDE_RENDERED_SKELETONS_COUNT = 6;

const FavouritesPage = () => {
  const {
    favouritesList,
    isAvailable: isFavouritesFeatureAvailable
  } = useFavourites();

  return (
    <MainLayout title="Pokédex — Favourites">
      {isServer ? (
        <PokemonsGrid
          pokemons={makeSkeletons(SERVER_SIDE_RENDERED_SKELETONS_COUNT)}
        />
      ) : !isFavouritesFeatureAvailable() ? (
        <ErrorMessage message="We cannot store favourites in your browser. Care to give us permission for local storage access?" />
      ) : favouritesList.length === 0 ? (
        <>
          <svg width={62} height={52}>
            <title>{'Heart Outline'}</title>
            <path
              d="M49.85 1.463a14.851 14.851 0 0110.689 10.74 14.934 14.934 0 01-4.255 14.576L34.506 48.712A4.926 4.926 0 0131 50.18a4.926 4.926 0 01-3.506-1.468L5.716 26.78A14.934 14.934 0 011.46 12.204 14.851 14.851 0 0112.15 1.464a14.769 14.769 0 0114.504 4.275L31 10.105l4.346-4.366A14.769 14.769 0 0149.85 1.463z"
              fillRule="nonzero"
              stroke="#334E68"
              strokeWidth={2}
              fill="none"
            />
          </svg>
          <p>No favourites yet?</p>
          <p className="smaller">
            Start your collection in the <br />
            <Link href="/">
              <a>Pokemon Explorer</a>
            </Link>
            .
          </p>
        </>
      ) : (
        <PokemonsGrid pokemons={favouritesList} />
      )}
      <style jsx>{`
        svg {
          margin: 4rem 0 2rem;
        }

        p {
          max-width: 40rem;
          margin: 1rem 0;
          font-size: 1.8rem;
          line-height: 1.3;
          text-align: center;
          color: var(--dark-slate-blue);
        }

        .smaller {
          font-size: 1.6rem;
          color: var(--metallic-blue);
        }

        a {
          color: var(--metallic-blue);
          transition: color 0.3s ease;
        }

        @media (hover: hover) {
          a:hover {
            color: var(--greeny-blue);
          }
        }

        @media (${gteMedium}) {
          p {
            font-size: 2.1rem;
            line-height: 1.3;
          }

          .smaller {
            font-size: 1.9rem;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default FavouritesPage;

import Head from 'next/head';

import usePokemonsListing from '../hooks/usePokemonsListing';

import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import PokemonsGrid from '../components/PokemonsGrid';

import { gteMedium } from '../theme/medias';

const Home = () => {
  const { pokemons, isLoading, error } = usePokemonsListing();

  return (
    <div>
      <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {error ? (
        <ErrorMessage message={error.message} />
      ) : isLoading || pokemons.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <PokemonsGrid pokemons={pokemons} />
      )}

      <style jsx>{`
        div {
          margin: 0 1.5rem;
          padding: 4rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (${gteMedium}) {
          div {
            margin: 0 4rem;
            padding: 6rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

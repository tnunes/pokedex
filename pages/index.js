import Head from 'next/head';

import usePokemonsListing from '../hooks/usePokemonsListing';

import ErrorMessage from '../components/ErrorMessage';
import PokemonsGrid from '../components/PokemonsGrid';
import Button from '../components/Button';

import { gteMedium } from '../theme/medias';

const PAGE_SIZE = 24;

const makeSkeletons = (length = PAGE_SIZE) =>
  Array.from({ length }, (x, n) => ({
    name: `skeleton ${n}`,
    isSkeleton: true
  }));

const Home = () => {
  const {
    pokemons,
    isLoading,
    error,
    loadNext,
    isLoadingNext,
    loadNextError
  } = usePokemonsListing({
    pageSize: PAGE_SIZE
  });

  return (
    <div>
      <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {error ? (
        <ErrorMessage message={error.message} />
      ) : isLoading || pokemons.length === 0 ? (
        <PokemonsGrid pokemons={makeSkeletons()} />
      ) : (
        <>
          <PokemonsGrid
            pokemons={
              isLoadingNext ? [...pokemons, ...makeSkeletons()] : pokemons
            }
          />
          {!isLoadingNext && loadNext && (
            <Button className="loadMoreButton" onClick={loadNext}>
              Load more
            </Button>
          )}
          {loadNextError && <ErrorMessage message={loadNextError.message} />}
        </>
      )}

      <style jsx>{`
        div {
          margin: 0 1.5rem;
          padding: 4rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        div > :global(.loadMoreButton) {
          margin: 4rem 0 2rem;
        }

        @media (${gteMedium}) {
          div {
            margin: 0 4rem;
            padding: 6rem 0;
          }

          div > :global(.loadMoreButton) {
            margin: 6rem 0 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

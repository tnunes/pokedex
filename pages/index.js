import usePokemonsListing from '../hooks/usePokemonsListing';
import { makeSkeletons } from '../services/skeletons';

import MainLayout from '../components/MainLayout';
import ErrorMessage from '../components/ErrorMessage';
import PokemonsGrid from '../components/PokemonsGrid';
import Button from '../components/Button';

import { gteMedium } from '../theme/medias';

const PAGE_SIZE = 24;

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
    <MainLayout title="Pokédex — Explorer">
      {error ? (
        <ErrorMessage message={error.message} />
      ) : isLoading || pokemons.length === 0 ? (
        <PokemonsGrid pokemons={makeSkeletons(PAGE_SIZE)} />
      ) : (
        <>
          <PokemonsGrid
            pokemons={
              isLoadingNext
                ? [...pokemons, ...makeSkeletons(PAGE_SIZE)]
                : pokemons
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
        :global(.loadMoreButton) {
          margin: 4rem 0 2rem;
        }

        @media (${gteMedium}) {
          :global(.loadMoreButton) {
            margin: 6rem 0 2rem;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default Home;

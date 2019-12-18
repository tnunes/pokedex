import { useEffect, useReducer } from 'react';

const POKEMON_LIST_API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  pokemons: [],
  loadNext: null,
  isLoadingNext: false,
  loadNextError: null
};

const ACTION_TYPES = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  FETCH_NEXT_START: 'FETCH_NEXT_START',
  FETCH_NEXT_SUCCESS: 'FETCH_NEXT_SUCCESS',
  FETCH_NEXT_ERROR: 'FETCH_NEXT_ERROR'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return { ...state, isLoading: true, error: null };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemons: action.pokemons,
        loadNext: action.loadNext
      };
    case ACTION_TYPES.FETCH_ERROR:
      return { ...state, isLoading: false, error: action.error };

    case ACTION_TYPES.FETCH_NEXT_START:
      return { ...state, isLoadingNext: true, loadNextError: null };
    case ACTION_TYPES.FETCH_NEXT_SUCCESS:
      return {
        ...state,
        isLoadingNext: false,
        pokemons: [...state.pokemons, ...action.pokemons],
        loadNext: action.loadNext
      };
    case ACTION_TYPES.FETCH_NEXT_ERROR:
      return { ...state, isLoadingNext: false, loadNextError: action.error };

    default:
      throw new Error(`Unexpected action ${action.type}`);
  }
}

export default function usePokemonsListing({ pageSize = 20 } = {}) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    let hasUnmounted = false;

    async function fetchPokemons(url, { isLoadNext = false } = {}) {
      dispatch({
        type: isLoadNext
          ? ACTION_TYPES.FETCH_NEXT_START
          : ACTION_TYPES.FETCH_START
      });

      try {
        const response = await fetch(url).then(res => {
          if (res.status >= 200 && res.status < 300) {
            return res.json();
          }

          throw new Error(`got unexpected ${res.status} response.`);
        });

        if (hasUnmounted) {
          return;
        }

        console.debug(
          `[usePokemonsListing] Fetched ${response.results.length} pokemons from a total of ${response.count}.`,
          { response }
        );

        dispatch({
          type: isLoadNext
            ? ACTION_TYPES.FETCH_NEXT_SUCCESS
            : ACTION_TYPES.FETCH_SUCCESS,
          pokemons: response.results,
          loadNext: response.next
            ? () => fetchPokemons(response.next, { isLoadNext: true })
            : null
        });
      } catch (error) {
        if (hasUnmounted) {
          return;
        }

        console.warn('Error while trying to load pokemons', error);

        dispatch({
          type: isLoadNext
            ? ACTION_TYPES.FETCH_NEXT_ERROR
            : ACTION_TYPES.FETCH_ERROR,
          error: new Error(`Could not load pokemons: ${error.message}`)
        });
      }
    }

    fetchPokemons(`${POKEMON_LIST_API_ENDPOINT}?limit=${pageSize}`);

    return () => {
      hasUnmounted = true;
    };
  }, [pageSize]);

  return state;
}

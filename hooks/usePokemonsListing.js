import { useEffect, useReducer } from 'react';

const POKEMON_LIST_API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  pokemons: []
};

const ACTION_TYPES = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return { ...state, isLoading: true, error: null };
    case ACTION_TYPES.FETCH_SUCCESS:
      return { isLoading: false, pokemons: action.pokemons };
    case ACTION_TYPES.FETCH_ERROR:
      return { isLoading: false, error: action.error };
    default:
      throw new Error(`Unexpected action ${action.type}`);
  }
}

export default function usePokemonsListing() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    let hasUnmounted = false;

    async function fetchPokemons() {
      dispatch({ type: ACTION_TYPES.FETCH_START });

      try {
        const response = await fetch(POKEMON_LIST_API_ENDPOINT).then(res => {
          if (res.status >= 200 && res.status < 300) {
            return res.json();
          }

          throw new Error(`got unexpected ${res.status} response.`);
        });

        if (hasUnmounted) {
          return;
        }

        console.debug(
          `[usePokemonsListing] Fetched ${response.count} pokemons.`,
          { response }
        );

        dispatch({
          type: ACTION_TYPES.FETCH_SUCCESS,
          pokemons: response.results
        });
      } catch (error) {
        if (hasUnmounted) {
          return;
        }

        console.warn('Error while trying to load pokemons', error);

        dispatch({
          type: ACTION_TYPES.FETCH_ERROR,
          error: new Error(`Could not load pokemons: ${error.message}`)
        });
      }
    }

    fetchPokemons();

    return () => {
      hasUnmounted = true;
    };
  }, []);

  return state;
}

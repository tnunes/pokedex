import { useEffect, useReducer } from 'react';

const POKEMON_DETAILS_API_ENDPOINT_PREFIX =
  'https://pokeapi.co/api/v2/pokemon/';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  pokemon: {}
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
      return { isLoading: false, pokemon: action.pokemon };
    case ACTION_TYPES.FETCH_ERROR:
      return { isLoading: false, error: action.error };
    default:
      throw new Error(`Unexpected action ${action.type}`);
  }
}

export default function usePokemonDetails(nameOrId) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    let hasUnmounted = false;

    async function fetchPokemon(nameOrId) {
      dispatch({ type: ACTION_TYPES.FETCH_START });

      try {
        const response = await fetch(
          `${POKEMON_DETAILS_API_ENDPOINT_PREFIX}${nameOrId}`
        ).then(res => {
          if (res.status >= 200 && res.status < 300) {
            return res.json();
          }

          throw new Error(`got unexpected ${res.status} response.`);
        });

        if (hasUnmounted) {
          return;
        }

        console.debug(
          `[usePokemonDetails] Fetched "${nameOrId}" pokemon details.`,
          { response }
        );

        dispatch({
          type: ACTION_TYPES.FETCH_SUCCESS,
          pokemon: response
        });
      } catch (error) {
        if (hasUnmounted) {
          return;
        }

        console.warn(
          `Error while trying to load pokemon details for "${nameOrId}"`,
          error
        );

        dispatch({
          type: ACTION_TYPES.FETCH_ERROR,
          error: new Error(`Could not load pokemon details: ${error.message}`)
        });
      }
    }

    fetchPokemon(nameOrId);

    return () => {
      hasUnmounted = true;
    };
  }, [nameOrId]);

  return state;
}

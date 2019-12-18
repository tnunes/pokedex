import * as storage from './localStorage';

const FAVOURITES_LIST_KEY = 'pokedex.favouritesList';

/**
 * Check if favourites management service is available.
 *
 * It won't be available if the local storage API is not available
 *
 * @returns {Boolean} - If the favourites management service is available.
 */
export function isAvailable() {
  return storage.isAvailable();
}

/**
 * Get the list of favourite pokemons for the current user.
 *
 * @returns {String[]} - Array of favourite pokemon names.
 */
export function getAll() {
  try {
    const favouritesString = storage.get(FAVOURITES_LIST_KEY);
    const favourites = JSON.parse(favouritesString);

    return favourites || [];
  } catch (err) {
    return [];
  }
}

/**
 * Add a pokemon to the list of favourites for the current user.
 *
 * @param {String} name - Name of the pokemon, lowecase, as accepted by the API.
 * @returns {String[]} - Array of all favourite pokemon names, including the recent addition.
 */
export function add(name) {
  try {
    const favourites = getAll();

    favourites.push(name);

    storage.set(FAVOURITES_LIST_KEY, JSON.stringify(favourites));

    return favourites;
  } catch (err) {
    return [];
  }
}

/**
 * Remove a pokemon from the list of favourites for the current user.
 *
 * @param {String} name - Name of the pokemon, lowecase, as accepted by the API.
 * @returns {String[]} - Array of all favourite pokemon names, excluding the recent removal.
 */
export function remove(name) {
  try {
    const favourites = getAll().filter(pokemonName => pokemonName !== name);

    storage.set(FAVOURITES_LIST_KEY, JSON.stringify(favourites));

    return favourites;
  } catch (err) {
    return [];
  }
}

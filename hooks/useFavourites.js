import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo
} from 'react';
import PropTypes from 'prop-types';

import * as favourites from '../services/favourites';

const FavouritesContext = createContext();

const favouritesNamesToPokemonObjects = pokemonNames =>
  pokemonNames.map(name => ({ name }));

export const FavouritesProvider = ({ children }) => {
  const [favouritesList, setFavouritesList] = useState(() =>
    favourites.getAll()
  );
  const add = useCallback(name => {
    const newFavouritesList = favourites.add(name);
    setFavouritesList(newFavouritesList);
  }, []);
  const remove = useCallback(name => {
    const newFavouritesList = favourites.remove(name);
    setFavouritesList(newFavouritesList);
  }, []);
  const isFavourite = useCallback(name => favouritesList.includes(name), [
    favouritesList
  ]);
  const context = useMemo(
    () => ({
      favouritesList: favouritesNamesToPokemonObjects(favouritesList),
      add,
      remove,
      isFavourite,
      isAvailable: favourites.isAvailable
    }),
    [favouritesList, add, remove, isFavourite]
  );

  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
};

FavouritesProvider.propTypes = {
  children: PropTypes.node
};

export default function useFavourites() {
  const context = useContext(FavouritesContext);

  if (typeof context === 'undefined') {
    throw new Error(
      'Consumers of useFavourites must be wrapped inside a <FavouritesProvider />'
    );
  }

  return context;
}

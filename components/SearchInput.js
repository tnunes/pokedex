import PropTypes from 'prop-types';

import SearchIcon from './SearchIcon';

const SearchInput = ({ className }) => (
  <div className={className}>
    <input
      name="search"
      aria-label="Search pokemons by name or number"
      placeholder="Search by name or number"
    />
    <SearchIcon className="searchIcon" />

    <style jsx>{`
      div {
        position: relative;
      }

      input {
        width: 30rem;
        border: none;
        border-radius: 1.8rem;
        padding: 0.4rem 1.2rem 0.4rem 4.1rem;
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 1.1875;
        letter-spacing: 0.013rem;
        color: var(--dark-grey-blue);
        background-color: var(--light-sky-blue);
      }

      input::placeholder {
        color: var(--dark-grey-blue);
        opacity: 0.8;
      }

      div > :global(.searchIcon) {
        position: absolute;
        top: 0.4rem;
        left: 1.2rem;
      }
    `}</style>
  </div>
);

SearchInput.propTypes = {
  className: PropTypes.string
};

export default SearchInput;

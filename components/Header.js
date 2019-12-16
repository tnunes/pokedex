import { gteLarge, ltLarge, gteExtralarge } from '../theme/medias';

import PokeballIcon from './PokeballIcon';
import SearchInput from './SearchInput';
import SearchIcon from './SearchIcon';
import MainNav from './MainNav';

const Header = () => (
  <header>
    <PokeballIcon />
    <span className="pageTitle">POKÉDEX</span>
    <MainNav />
    <SearchInput className="searchInput" />
    <SearchIcon className="searchIcon" />

    <style jsx>{`
      header {
        --header-border-highlight-height: 0.4rem;
        --header-height: 5.9rem;
        --header-horizontal-padding: 2rem;

        position: relative;
        width: 100%;
        height: var(--header-height);
        padding: var(--header-border-highlight-height)
          var(--header-horizontal-padding) 0;
        display: flex;
        align-items: center;
        background-color: var(--white);
        box-shadow: 0 0 0.2rem 0 var(--light-sky-blue);
      }

      header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: var(--header-border-highlight-height);
        background-color: var(--seaweed-green);
      }

      header > :global(.searchIcon) {
        margin: 0.2rem 0 0 auto;
      }

      .pageTitle {
        margin-left: 0.8rem;
        font-weight: 700;
        font-size: 2.4rem;
        letter-spacing: 0.02rem;
        color: var(--dark-blue-green);
      }

      @media (${ltLarge}) {
        .pageTitle,
        header :global(.searchInput) {
          display: none;
        }
      }

      @media (${gteLarge}) {
        header {
          --header-border-highlight-height: 0.5rem;
          --header-height: 7.4rem;
          --header-horizontal-padding: 4rem;
        }

        header :global(.searchInput) {
          margin-left: auto;
        }

        header > :global(.searchIcon) {
          display: none;
        }
      }

      @media (${gteExtralarge}) {
        header {
          --header-horizontal-padding: calc(4rem + ((100% - 144rem) / 2));
        }
      }
    `}</style>
  </header>
);

export default Header;

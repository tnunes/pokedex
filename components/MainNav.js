import Link from 'next/link';
import { useRouter } from 'next/router';

import { gteLarge } from '../theme/medias';

const MainNav = () => {
  const { route } = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={route === '/' ? 'active' : undefined}>Explorer</a>
          </Link>
        </li>
        <li>
          <Link href="/favourites">
            <a className={route === '/favourites' ? 'active' : undefined}>
              Favourites
            </a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        ul {
          display: flex;
          margin: -0.2rem 0 0 2.5rem;
          padding: 0;
        }

        li {
          list-style-type: none;
        }

        li + li {
          margin-left: 0.8rem;
        }

        a {
          padding: 0.1rem 0.7rem 0.3rem;
          letter-spacing: 0.013rem;
          color: var(--metallic-blue);
          text-decoration: none;
          transition: color 0.3s ease, background-color 0.5s ease;
        }

        @media (hover: hover) {
          a:not(.active):hover {
            color: var(--greeny-blue);
          }
        }

        .active {
          position: relative;
          background-color: var(--greeny-blue);
          color: var(--white);
        }

        @media (${gteLarge}) {
          ul {
            margin-left: 3.2rem;
          }

          li + li {
            margin-left: 1.1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default MainNav;

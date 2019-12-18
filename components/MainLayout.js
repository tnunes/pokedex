import PropTypes from 'prop-types';
import Head from 'next/head';

import { gteMedium } from '../theme/medias';

const MainLayout = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="A pokedex featuring all known pokemon species"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1 className="seoAndScreenReaderOnly">{title}</h1>

    {children}

    <style jsx>{`
      div {
        margin: 0 1.5rem;
        padding: 4rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .seoAndScreenReaderOnly {
        position: absolute;
        width: 0.1rem;
        height: 0.1rem;
        overflow: hidden;
        clip: rect(0.1rem, 0.1rem, 0.1rem, 0.1rem);
      }

      @media (${gteMedium}) {
        div {
          margin: 0 4rem;
          padding: 6rem 0;
        }
      }
    `}</style>
  </div>
);

MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default MainLayout;

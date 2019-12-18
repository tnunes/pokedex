import PropTypes from 'prop-types';
import Head from 'next/head';

import { gteMedium } from '../theme/medias';

const MainLayout = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {children}

    <style jsx>{`
      div {
        margin: 0 1.5rem;
        padding: 4rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
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

import App from 'next/app';
import normalizeStyles from 'normalize.css?type=global';
import Head from 'next/head';

import Header from '../components/Header';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <style jsx global>
          {normalizeStyles}
        </style>
        <style jsx global>{`
          /** Additional common normalizations */
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          html {
            font-size: 62.5%; /* Set root font-size to 10px so we can more easily use 'rem's everywhere */
          }
          body {
            min-width: 32rem;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
        <style jsx global>{`
          /** Theme colors */
          :root {
            --white: #ffffff;
            --pale-grey: #f0f4f8;
            --mine-shaft: #3b3b3b;
            --emperor: #515151;
            --gray: #7e7e7e;
            --silver-chalice: #9e9e9e;
            --light-sky-blue: #d9e2ec;
            --greyish-blue: #627d98;
            --metallic-blue: #486581;
            --dark-grey-blue: #334e68;
            --dark-sky-blue: #4098d7;
            --malibu: #88b1fc;
            --dark-slate-blue: #102a43;
            --royal: #0b1d96;
            --light-purple: #a368fc;
            --medium-purple: #9446ed;
            --studio: #724bb7;
            --cerise: #e8368f;
            --brick: #ba2525;
            --madras: #2b4005;
            --green-leaf: #42600c;
            --sap-green: #63921a;
            --seaweed-green: #35b378;
            --greeny-blue: #3ebd93;
            --dark-blue-green: #014d40;
            --dark-sea-green: #0c6b58;
            --mosque: #05606e;
            --macaroni-and-cheese: #f0b429;
            --deep-bronze: #513c06;

            --black: #000;
          }

          /** Theme global styles */
          body,
          input,
          select,
          button {
            font-family: 'Lato', sans-serif;
            font-size: 1.6rem;
            line-height: 1.1875;
          }

          body {
            background-color: var(--pale-grey);
          }
        `}</style>

        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;

import App from 'next/app';
import normalizeStyles from 'normalize.css?type=global';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <style jsx global>
          {normalizeStyles}
        </style>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;

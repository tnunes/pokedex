import Head from 'next/head';

const Home = () => (
  <div>
    <Head>
      <title>Pokédex</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <p>Let&apos;s catch them all!</p>

    <style jsx>{`
      p {
        margin-top: 5rem;
        text-align: center;
        color: forestgreen;
      }
    `}</style>
  </div>
);

export default Home;

import Head from 'next/head';
import { useEffect, useState } from 'react';

import PokemonsGrid from '../components/PokemonsGrid';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/'
      ).then(res => res.json());

      console.log(
        `🚀 Found ${response.count} pokemons. Rendering ${response.results.length}`
      );

      setPokemons(response.results);
    }

    fetchPokemons();
  }, []);

  return (
    <div>
      <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PokemonsGrid pokemons={pokemons} />

      <style jsx>{`
        div {
          padding: 4rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Home;

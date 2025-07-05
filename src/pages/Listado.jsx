import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const Listado = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [errorList, setErrorList] = useState(null);

  useEffect(() => {
    setLoadingList(true);
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar listado de Pokémon');
        return res.json();
      })
      .then(data => {
        setPokemonList(data.results);
        setLoadingList(false);
      })
      .catch(err => {
        setErrorList(err.message);
        setLoadingList(false);
      });
  }, []);

  if (loadingList) return <div className="flex justify-center mt-10">Cargando listado...</div>;
  if (errorList) return <div className="text-center text-red-500 mt-10">{errorList}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
};

export default Listado;
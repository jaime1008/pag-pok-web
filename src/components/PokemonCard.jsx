import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import {link} from "react-router-dom";
import styled from '@emotion/styled';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar Pokémon');
        return res.json();
      })
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <div className="flex justify-center"><CircularProgress /></div>;
  if (error) return <Typography color="error" align="center">{error}</Typography>;

  return (
    <Link to={`/pokemon/${pokemon.name}`} style={{
      textDecoration: "none"}}>
      <Card className="max-w-xs mx-auto hover:shadow-lg transition-shadow cursor-pointer">
        <CardContent className="text-center">
          <Typography variant="h5" component="h2" className="capitalize mb-2">
            {pokemon.name}
          </Typography>
          <img 
            src={pokemon.sprites?.front_default || 'https://via.placeholder.com/96'} 
            alt={pokemon.name} 
            className="mx-auto"
            width={96}
            height={96}
          />
          <Typography variant="body2" color="textSecondary" className="mt-2">
            Tipo: {pokemon.types.map(t => t.type.name).join(', ')}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Peso: {pokemon.weight} hectogramos
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Altura: {pokemon.height} decímetros
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PokemonCard;

// pages/server/[id].js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PokemonDetails from '../../components/PokemonDetails';

const ClientPokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPokemonDetails(data);
        } else {
          console.error('Erreur lors de la récupération des détails du Pokémon');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du Pokémon', error);
      }
    };

    if (id) {
      fetchPokemonDetails();
    }
  }, [id]);

  return (
    <div>
      <h1>Détails du Pokémon</h1>
      {pokemonDetails ? <PokemonDetails pokemon={pokemonDetails} /> : <div>Chargement en cours...</div>}
    </div>
  );
};

export default ClientPokemonDetails;

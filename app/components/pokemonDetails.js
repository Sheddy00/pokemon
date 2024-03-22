import React from 'react';

const PokemonDetails = ({ pokemon }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Taille: {pokemon.height}</p>
      <p>Poids: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>Numéro: {pokemon.order}</p>
      {/* Ajoutez d'autres détails si nécessaire */}
    </div>
  );
};

export default PokemonDetails;

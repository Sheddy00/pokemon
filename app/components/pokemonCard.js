import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Nom: {pokemon.name}</p>
      {/* Ajoutez d'autres détails si nécessaire */}
    </div>
  );
};

export default PokemonCard;

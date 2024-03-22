import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Home = ({ pokemonType }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${(currentPage - 1) * 50}`);
        if (response.ok) {
          const data = await response.json();
          setPokemonList(data.results);
          setTotalPages(Math.ceil(data.count / 50));
        } else {
          console.error('Erreur lors de la récupération des données Pokémon');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données Pokémon', error);
      }
    };

    fetchPokemonList();
  }, [currentPage]);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Liste des Pokémon de type {pokemonType}</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <span>{pokemon.name}</span>
            <Link href={`/details/${index + 1}`}>
              <a>Détails</a>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => handlePagination(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default Home;

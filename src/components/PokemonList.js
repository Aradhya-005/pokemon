import React, { useEffect, useState } from "react"; // Import necessary React hooks
import axios from "axios"; // Import axios for making HTTP requests
import PokemonCard from "./PokemonCard"; // Import the PokemonCard component

const PokemonList = ({ searchTerm }) => {
  // State to store the fetched Pokémon data
  const [pokemonData, setPokemonData] = useState([]);
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // State to handle error messages
  const [error, setError] = useState(null);

  // useEffect to fetch Pokémon data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data from the Pokémon API
        const result = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        // Setting the fetched data to the state
        setPokemonData(result.data.results);
      } catch (error) {
        // Setting error message if the fetch fails
        setError("Failed to fetch Pokémon data");
      } finally {
        // Setting loading state to false after fetching data
        setLoading(false);
      }
    };
    fetchData(); // Calling the fetchData function
  }, []); // Empty dependency array ensures this runs only once

  // Display loading message while fetching data
  if (loading) return <div>Loading...</div>;
  // Display error message if there's an error
  if (error) return <div>{error}</div>;

  // Filtering the Pokémon data based on the search term
  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pokemon-container">
      {filteredPokemon.map((pokemon, index) => (
        // Rendering a PokemonCard for each filtered Pokémon
        <PokemonCard
          key={index} // Using index as a key 
          name={pokemon.name} // Passing Pokémon name as a prop
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} 
        />
      ))}
    </div>
  );
};

export default PokemonList; // Exporting the PokemonList component

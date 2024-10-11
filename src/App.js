import React, { useState } from "react"; // Importing React and useState hook from React
import PokemonList from "./components/PokemonList"; // Importing the PokemonList component
import Navbar from "./components/Navbar"; // Importing the Navbar component

const App = () => {
  // State variable to hold the current search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* Navbar component with search functionality */}
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="App">
        <h1>Pokémon Characters</h1> 
        {/* PokemonList component which displays the list of Pokémon based on the search term */}
        <PokemonList searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default App; 

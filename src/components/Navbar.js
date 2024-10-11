import React from "react";
import PokemonLogo from "../assets/Pokemon-Logo.jpg"; // Importing the Pokémon logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesome for icons
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Importing the search icon

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="navbar">
      <img src={PokemonLogo} alt="Pokémon Logo" className="navbar-logo" />
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          className="search-bar"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Navbar;

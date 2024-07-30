import { useEffect, useState } from "react";
import { usePokemonContext } from "../../context/PokemonContext";
import "./Header.css";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  const { pokemonData, setFilteredData } = usePokemonContext();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setFilteredData(pokemonData);
  }, [pokemonData]);

  const handlePokemons = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchInput(query);

    const filteredPokemon = pokemonData!.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query)
    );

    setFilteredData(filteredPokemon);
  };

  return (
    <header>
      <Link to="/">
        <img src="/images/pokemon-logo.png" alt="Pokemon logo" />
      </Link>
      <div className="header-bar">
        <Link to="/pokemon-type">
          <img src="/images/menu-icon.png" alt="Menu icon" />
        </Link>
        <input
          onChange={handlePokemons}
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Search Pokemon"
          value={searchInput}
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;

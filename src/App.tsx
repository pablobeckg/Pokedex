import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { PokemonContext } from "./context/PokemonContext";
import { IResult } from "./IPokemon";
import DetailPage from "./pages/DetailPage";
import PokemonTypePage from "./pages/TypePage";
import TypePokemonPage from "./pages/TypePokemonPage";

function App() {
  const [pokemonData, setPokemonData] = useState<IResult[] | null>(null);
  const [filteredData, setFilteredData] = useState<IResult[] | null>(null);
  const [theme, setTheme] = useState<string>("light");
  

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => res.json())
      .then((data) => setPokemonData(data.results))
      .catch((error) => console.error("error by fetching pokemon data", error));
  }, []);

  return (
    <div className={`${theme}-theme background`}>
      <PokemonContext.Provider
        value={{ pokemonData, filteredData, setFilteredData, theme, setTheme }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:pokemon" element={<DetailPage />} />
            <Route path="/pokemon-type" element={<PokemonTypePage />} />
            <Route path="/pokemon-type/:types" element={<TypePokemonPage/>} />
          </Routes>
        </BrowserRouter>
      </PokemonContext.Provider>
    </div>
  );
}

export default App;

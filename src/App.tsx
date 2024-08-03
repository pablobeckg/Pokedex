import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";
import { LoadingContext, PokemonContext } from "./context/PokemonContext";
import { IResult } from "./IPokemon";
import DetailPage from "./pages/DetailPage";
import PokemonTypePage from "./pages/TypePage";
import TypePokemonPage from "./pages/TypePokemonPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

function App() {
  const [pokemonData, setPokemonData] = useState<IResult[] | null>(null);
  const [filteredData, setFilteredData] = useState<IResult[] | null>(null);
  const [theme, setTheme] = useState<string>("light");
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className={`${theme}-theme background`}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <PokemonContext.Provider
          value={{
            pokemonData, setPokemonData,
            filteredData,
            setFilteredData,
            theme,
            setTheme,
          }}
        >
          {loading ?
          (<LoadingPage />)

          :

          (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:pokemon" element={<DetailPage />} />
              <Route path="/pokemon-type" element={<PokemonTypePage />} />
              <Route
                path="/pokemon-type/:types"
                element={<TypePokemonPage />}
              />
            </Routes>
          </BrowserRouter>
          )}
        </PokemonContext.Provider>
      </LoadingContext.Provider>
    </div>
  );
}

export default App;
